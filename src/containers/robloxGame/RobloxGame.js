import React, { useState, useEffect } from "react";
import "./RobloxGame.scss";
import ScrollReveal from "../../components/scrollReveal/ScrollReveal";
import GameInfoCard from "../../components/gameInfoCard/GameInfoCard";
import { robloxGameSection } from "../../portfolio";

export default function RobloxGame() {
  // Initialize with default data immediately (no loading state)
  const [games, setGames] = useState(() => {
    if (!robloxGameSection.games || robloxGameSection.games.length === 0) {
      return [];
    }
    // Return default game data immediately
    return robloxGameSection.games.map(game => ({
      placeId: game.placeId,
      universeId: game.universeId,
      name: game.name || "Unknown Game",
      gameUrl: game.gameUrl || `https://www.roblox.com/games/${game.placeId}`,
      visits: 0,
      favorites: 0,
      playing: 0,
      thumbnails: [require("../../assets/images/squidthumbnail.png")],
    }));
  });

  useEffect(() => {
    const fetchWithProxy = async (url) => {
      // Use roproxy for Roblox API requests - simply replace roblox.com with roproxy.com
      const roproxyUrl = url.replace('roblox.com', 'roproxy.com');
      
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout
        
        const response = await fetch(roproxyUrl, {
          signal: controller.signal,
        });
        
        clearTimeout(timeoutId);
        
        if (response.ok) {
          const data = await response.json();
          return data;
        }
      } catch (error) {
        // Silently fail
      }
      throw new Error("Failed to fetch data");
    };

    const fetchGameData = async () => {
      // Fetch data in background and update silently
      if (!robloxGameSection.games || robloxGameSection.games.length === 0) {
        return;
      }

      try {
        const gamesData = await Promise.all(
          robloxGameSection.games.map(async (game) => {
            try {
              // Universe ID is important - stored as a variable for the game card
              const universeId = game.universeId || game.placeId;

              // Fetch game stats using universe ID
              // API: https://games.roblox.com/v1/games?universeIds={universeId}
              const statsUrl = `https://games.roblox.com/v1/games?universeIds=${universeId}`;
              const statsData = await fetchWithProxy(statsUrl);
              const stats = statsData.data?.[0];

              // Fetch game thumbnails using media endpoint
              let thumbnails = [require("../../assets/images/squidthumbnail.png")]; // Default fallback
              console.log('[RobloxGame] Starting thumbnail fetch for game:', game.name, 'universeId:', universeId);
              
              try {
                // First, fetch media to get thumbnail IDs
                // Universe ID is important - stored as a variable
                const mediaUrl = `https://games.roblox.com/v2/games/${universeId}/media?fetchAllExperienceRelatedMedia=true`;
                console.log('[RobloxGame] Fetching media from:', mediaUrl);
                const mediaData = await fetchWithProxy(mediaUrl);
                console.log('[RobloxGame] Media API response received:', mediaData);
                
                // Extract thumbnail IDs from the response
                // The response structure may vary, so we'll try multiple approaches
                let thumbnailIds = [];
                
                if (mediaData) {
                  console.log('[RobloxGame] Media data structure:', {
                    isArray: Array.isArray(mediaData),
                    hasData: !!mediaData.data,
                    dataIsArray: Array.isArray(mediaData.data),
                    keys: Object.keys(mediaData),
                    fullData: mediaData
                  });
                  
                  // Try direct array of IDs
                  if (Array.isArray(mediaData)) {
                    console.log('[RobloxGame] Media data is direct array');
                    thumbnailIds = mediaData.map(id => String(id)).filter(Boolean);
                  }
                  // Try data array with assetId, imageId, or id fields
                  else if (mediaData.data && Array.isArray(mediaData.data)) {
                    console.log('[RobloxGame] Media data has data array, length:', mediaData.data.length);
                    console.log('[RobloxGame] First few items:', mediaData.data.slice(0, 3));
                    thumbnailIds = mediaData.data
                      .map(item => {
                        if (typeof item === 'number' || typeof item === 'string') {
                          return String(item);
                        }
                        // Use imageId for media API response (assetTypeId: 1 means Image)
                        const id = item?.imageId || item?.assetId || item?.id || item?.thumbnailId;
                        console.log('[RobloxGame] Processing item:', item, 'extracted ID:', id);
                        return id;
                      })
                      .filter(Boolean)
                      .map(id => String(id));
                  }
                  // Try other possible structures
                  else if (mediaData.thumbnailIds && Array.isArray(mediaData.thumbnailIds)) {
                    console.log('[RobloxGame] Media data has thumbnailIds array');
                    thumbnailIds = mediaData.thumbnailIds.map(id => String(id));
                  }
                  
                  console.log('[RobloxGame] Extracted thumbnail IDs:', thumbnailIds, 'count:', thumbnailIds.length);
                } else {
                  console.log('[RobloxGame] No media data received');
                }
                
                // If we got thumbnail IDs, fetch the actual thumbnails
                if (thumbnailIds.length > 0) {
                  const thumbnailIdsString = thumbnailIds.join(',');
                  const thumbnailsUrl = `https://thumbnails.roblox.com/v1/games/${universeId}/thumbnails?thumbnailIds=${thumbnailIdsString}&size=768x432&format=Png&isCircular=false`;
                  console.log('[RobloxGame] Fetching thumbnails from:', thumbnailsUrl);
                  const thumbnailsData = await fetchWithProxy(thumbnailsUrl);
                  console.log('[RobloxGame] Thumbnails API response received:', thumbnailsData);
                  
                  if (thumbnailsData && thumbnailsData.data && Array.isArray(thumbnailsData.data)) {
                    console.log('[RobloxGame] Thumbnails data array length:', thumbnailsData.data.length);
                    const fetchedThumbnails = thumbnailsData.data
                      .map(item => {
                        console.log('[RobloxGame] Processing thumbnail item:', item);
                        return item?.imageUrl;
                      })
                      .filter(Boolean);
                    
                    console.log('[RobloxGame] Fetched thumbnails URLs:', fetchedThumbnails, 'count:', fetchedThumbnails.length);
                    
                    // Replace default with fetched thumbnails if we got any
                    if (fetchedThumbnails.length > 0) {
                      thumbnails = fetchedThumbnails;
                      console.log('[RobloxGame] ✅ Replaced thumbnails array with:', thumbnails);
                    } else {
                      console.log('[RobloxGame] ⚠️ No valid thumbnail URLs found, keeping default');
                    }
                  } else {
                    console.log('[RobloxGame] ⚠️ Invalid thumbnails data structure:', thumbnailsData);
                  }
                } else {
                  console.log('[RobloxGame] ⚠️ No thumbnail IDs extracted, keeping default thumbnail');
                }
              } catch (err) {
                console.error('[RobloxGame] ❌ Error fetching thumbnails:', err);
                console.error('[RobloxGame] Error stack:', err.stack);
              }
              
              console.log('[RobloxGame] Final thumbnails array for', game.name, ':', thumbnails);

              return {
                placeId: game.placeId,
                universeId: universeId, // Important variable for game card
                name: game.name || stats?.name || "Unknown Game",
                gameUrl: game.gameUrl || `https://www.roblox.com/games/${game.placeId}`,
                visits: stats?.visits || 0,
                favorites: stats?.favoritedCount || 0,
                playing: stats?.playing || 0,
                thumbnails: thumbnails.filter(Boolean),
              };
            } catch (err) {
              console.error(`Error fetching data for game ${game.name}:`, err);
              // Keep default data on error
              return null;
            }
          })
        );

        // Only update if we got valid data
        const validGames = gamesData.filter(g => g !== null);
        if (validGames.length > 0) {
          setGames(validGames);
        }
      } catch (err) {
        console.error("Error fetching Roblox games:", err);
        // Silently fail - keep default data
      }
    };

    if (robloxGameSection.display) {
      fetchGameData();
    }
  }, []);

  if (!robloxGameSection.display) {
    return null;
  }

  return (
    <ScrollReveal>
      <div className="main" id="projects">
        <div className="projects-main-div">
          <h1 className="projects-heading">Our Games</h1>
          <div className="projects-container">
            <GameInfoCard games={games} />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
