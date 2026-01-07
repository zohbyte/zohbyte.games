import React, {useState, useEffect} from "react";
import "./RobloxAvatar.scss";

export default function RobloxAvatar({userId, alt, className}) {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAvatar = async () => {
      const apiUrl = `https://thumbnails.roblox.com/v1/users/avatar-bust?userIds=${userId}&size=150x150&format=Png&isCircular=false`;
      // Use roproxy for Roblox API requests - simply replace roblox.com with roproxy.com
      const roproxyUrl = apiUrl.replace("roblox.com", "roproxy.com");

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const response = await fetch(roproxyUrl, {
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          setLoading(false);
          return;
        }

        const jsonData = await response.json();

        // Response structure: {"data":[{"targetId":2475651281,"state":"Completed","imageUrl":"...","version":"TN3"}]}
        if (
          jsonData &&
          jsonData.data &&
          Array.isArray(jsonData.data) &&
          jsonData.data.length > 0
        ) {
          const avatarData = jsonData.data[0];

          if (avatarData && avatarData.imageUrl) {
            setImageUrl(avatarData.imageUrl);
            setLoading(false);
            return;
          }
        }
      } catch (error) {
        // Silently fail
      }

      // If fetch fails
      setLoading(false);
    };

    if (userId) {
      fetchAvatar();
    } else {
      setLoading(false);
    }
  }, [userId]);

  if (loading) {
    return (
      <div className={`${className} roblox-avatar-loading`}>
        <div className="loading-ring"></div>
      </div>
    );
  }

  if (!imageUrl) {
    return (
      <div
        className={className}
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "#999",
          display: "block"
        }}
        title="Failed to load avatar"
      />
    );
  }

  return <img src={imageUrl} alt={alt} className={className} />;
}
