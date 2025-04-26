import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ChatBackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/")}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded hover:bg-gray-800 transition-colors text-white bg-transparent"
      aria-label="Voltar para página inicial"
      style={{ position: 'absolute', left: 16, top: 16, zIndex: 3 }}
    >
      <ArrowLeft className="w-5 h-5" /> Voltar
    </button>
  );
};

export default ChatBackButton;
