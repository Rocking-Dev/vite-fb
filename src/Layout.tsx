import React, { useState } from "react";
import {
  AlignJustify,
  Bookmark,
  MessageCircle,
  Funnel,
  Mail,
  CircleHelp,
} from "lucide-react";
import IconButton from "./components/IconButton";
import Timeline from "./components/Timeline";
import Drawer from "./components/Drawer";
import { DefaultScreen, Desktop, Mobile } from "./ScreenViews";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Desktop>
        <div className="absolute z-10 top-10 w-full px-10">
          <Timeline />
        </div>
        <div className="absolute z-10 bottom-10 flex gap-4 px-10">
          <IconButton onClick={toggleDrawer}>
            <AlignJustify className="stroke-primary" />
          </IconButton>
          <IconButton>
            <MessageCircle className="fill-primary stroke-0 rotate-y-180" />
          </IconButton>
          <IconButton>
            <Bookmark className="fill-primary stroke-0" />
          </IconButton>
          <IconButton>
            <Funnel className="fill-primary stroke-0" />
          </IconButton>
          <IconButton>
            <Mail className="fill-primary text-white" />
          </IconButton>
          <IconButton>
            <CircleHelp className="text-primary stroke-3" />
          </IconButton>
        </div>
      </Desktop>
      <DefaultScreen>
        <div className="absolute z-20 top-5 left-5">
          <IconButton onClick={toggleDrawer}>
            <AlignJustify className="stroke-primary" />
          </IconButton>
        </div>
        <div className="absolute z-10 top-5 w-full px-20">
          <Timeline />
        </div>
        <div className="absolute z-20 top-5 right-5">
          <IconButton>
            <Bookmark className="fill-primary stroke-0" />
          </IconButton>
        </div>
        <div className="absolute z-20 bottom-5 left-5">
          <IconButton>
            <Funnel className="fill-primary stroke-0" />
          </IconButton>
        </div>
        <div className="absolute z-20 bottom-5 right-5">
          <IconButton>
            <MessageCircle className="fill-primary stroke-0 rotate-y-180" />
          </IconButton>
        </div>
      </DefaultScreen>
      <Mobile>
        <div className="absolute z-20 top-5 left-5 flex gap-5">
          <IconButton onClick={toggleDrawer}>
            <AlignJustify className="stroke-primary" />
          </IconButton>
          <IconButton>
            <MessageCircle className="fill-primary stroke-0 rotate-y-180" />
          </IconButton>
        </div>
        <div className="absolute z-20 top-5 right-5 flex gap-5">
          <IconButton>
            <Bookmark className="fill-primary stroke-0" />
          </IconButton>
          <IconButton>
            <Funnel className="fill-primary stroke-0" />
          </IconButton>
        </div>
        <div className="absolute z-10 bottom-5 w-full px-5">
          <Timeline />
        </div>
      </Mobile>
      <Drawer isOpen={isOpen} onClose={toggleDrawer} />
      <div className="absolute">{children}</div>
    </div>
  );
};

export default Layout;
