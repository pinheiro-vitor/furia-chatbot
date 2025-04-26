import React from "react";
import { useNavigate } from "react-router-dom";
import HomeBanner from "@/components/HomeBanner";
import LiveMatchStatus from "@/components/LiveMatchStatus";
import StreamGaules from "@/components/StreamGaules";
import TeamHighlights from "@/components/TeamHighlights";
import UpcomingMatches from "@/components/UpcomingMatches";
import ChatFeatures from "@/components/ChatFeatures";
import Footer from "@/components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const matchesRef = React.useRef<HTMLDivElement>(null);

  const handleScrollToMatches = () => {
    if (matchesRef.current) {
      matchesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1">
        <HomeBanner onChatClick={() => navigate("/chat")} onGamesClick={handleScrollToMatches} />
        <LiveMatchStatus />
        <StreamGaules />
        <TeamHighlights />
        <div ref={matchesRef}>
          <UpcomingMatches />
        </div>
        <ChatFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
