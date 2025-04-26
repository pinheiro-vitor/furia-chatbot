import React from "react";

const StreamGaules = () => (
  <section className="w-full max-w-4xl mx-auto mt-12 bg-[#18181b] rounded-xl p-6">
    <h2 className="text-2xl font-bold text-white text-center mb-2">Acompanhe a FURIA com o Gaules</h2>
    <div className="bg-[#23232b] rounded-lg p-6 flex flex-col items-center">
      <span className="text-gray-300 mb-2">A FURIA não está jogando no momento</span>
      <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded mt-2 cursor-not-allowed" disabled>
        Assistir o Gaules mesmo assim
      </button>
    </div>
  </section>
);

export default StreamGaules;
