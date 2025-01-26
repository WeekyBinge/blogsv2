import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function SocialIcons() {
  const [hovered, setHovered] = useState({
    github: false,
    linkedin: false,
    twitter: false,
  });

  const handleMouseEnter = (icon) => {
    setHovered((prevState) => ({ ...prevState, [icon]: true }));
  };

  const handleMouseLeave = (icon) => {
    setHovered((prevState) => ({ ...prevState, [icon]: false }));
  };

  return (
    <div>
      {/* GitHub Icon */}
      <IconButton
        color="primary"
        href="https://github.com/riteshsonawane1372"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        style={{ margin: 5 }}
        onMouseEnter={() => handleMouseEnter('github')}
        onMouseLeave={() => handleMouseLeave('github')}
      >
        <FaGithub size={24} color={hovered.github ? '#9fa19f' : 'white'} />
      </IconButton>

      {/* LinkedIn Icon */}
      <IconButton
        color="primary"
        href="https://www.linkedin.com/in/ritesh-sonawane-794b6a226/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        style={{ margin: 5 }}
        onMouseEnter={() => handleMouseEnter('linkedin')}
        onMouseLeave={() => handleMouseLeave('linkedin')}
      >
        <FaLinkedin size={24} color={hovered.linkedin ? ' #0a66c2' : 'white'} />
      </IconButton>

      {/* Twitter Icon */}
      <IconButton
        color="primary"
        href="https://twitter.com/RiteshS14112760"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        style={{ margin: 5 }}
        onMouseEnter={() => handleMouseEnter('twitter')}
        onMouseLeave={() => handleMouseLeave('twitter')}
      >
        <FaXTwitter size={24} color={hovered.twitter ? '#9fa19f' : 'white'} />
      </IconButton>
    </div>
  );
}

export default SocialIcons;

