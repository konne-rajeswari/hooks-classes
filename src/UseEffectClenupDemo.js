import React, { useEffect } from 'react'
import {cleanup} from "@testing-library/react";
import { useState } from 'react';

export default function UseEffectClenupDemo() {
    const [open, setOpen] = useState(true);
    return (
    <div>
      {open && <Chat />}
        <button onClick={() => setOpen(!open)}>Toggle Chat</button>
    </div>
  )
}

function Chat() {
    useEffect(() => {
        return () => {
            alert("Chat window opened");
        }
    });

    useEffect(() => {
        alert("Chat window closed")
        }, []); 

    return <div>
        <h1>Chat Window</h1>
    </div>
    }