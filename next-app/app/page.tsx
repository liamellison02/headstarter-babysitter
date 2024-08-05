'use client';

import Chat from "./components/Chat";

export default function Home() {
  return (
    <main className="app">
      <div className="container">
        <div className="app-header">
          <h1>Headstarter Babysitter</h1>
          <p>The ultimate companion to hold the hand of novice Headstarter fellows!</p>
          <Chat />
        </div>
      </div>
    </main>
  );
}
