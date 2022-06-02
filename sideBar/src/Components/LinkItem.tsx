import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings
  } from 'react-icons/fi';
  
  import { IconType } from 'react-icons';
  import { ReactText } from 'react';
  
  export interface LinkItemProps {
    name: string;
    icon: IconType;
  }
  export const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome },
    { name: 'Trending', icon: FiTrendingUp },
    { name: 'Explore', icon: FiCompass },
    { name: 'Favourites', icon: FiStar },
    { name: 'Settings', icon: FiSettings },
  ];
 export interface SidebarProps {
    onClose: () => void;
  }
  export interface NavItemProps {
    icon: IconType;
    children: ReactText;
  }
  export interface MobileProps {
    onOpen: () => void;
  }