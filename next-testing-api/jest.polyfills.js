import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Add Web Streams API polyfills
if (typeof global.ReadableStream === "undefined") {
  const {
    ReadableStream,
    WritableStream,
    TransformStream,
  } = require("stream/web");
  global.ReadableStream = ReadableStream;
  global.WritableStream = WritableStream;
  global.TransformStream = TransformStream;
}

// BroadcastChannel API
class MockBroadcastChannel {
  constructor(channel) {
    this.channel = channel;
    this.onmessage = null;
  }

  postMessage(message) {
    // Mock implementation - doesn't actually broadcast
    if (this.onmessage) {
      setTimeout(() => {
        if (this.onmessage) {
          this.onmessage({ data: message });
        }
      }, 0);
    }
  }

  close() {
    this.onmessage = null;
  }
}

global.BroadcastChannel = MockBroadcastChannel;

// Other Web APIs you might need
global.FormData = global.FormData || require("form-data");
global.Request = global.Request || require("node-fetch").Request;
global.Response = global.Response || require("node-fetch").Response;
global.fetch = global.fetch || require("node-fetch");

// MSW-specific polyfills
global.URL.createObjectURL = jest.fn();
global.URL.revokeObjectURL = jest.fn();
