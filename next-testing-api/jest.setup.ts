import "@testing-library/jest-dom";
import "whatwg-fetch"; // polyfill for fetch in tests
import { server } from "@/mocks/server";

// Add TextEncoder and TextDecoder polyfills

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
