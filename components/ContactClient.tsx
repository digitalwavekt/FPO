"use client";

import { useState } from "react";
import { Copy, CheckCircle } from "lucide-react";

interface ContactClientProps {
  type: "copy";
  text: string;
}

export default function ContactClient({ type, text }: ContactClientProps) {
  const [copied, setCopied] = useState(false);

  if (type === "copy") {
    return (
      <button
        onClick={() => {
          navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        className="mt-2 inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
      >
        {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        {copied ? "Copied!" : "Copy Address"}
      </button>
    );
  }

  return null;
}
