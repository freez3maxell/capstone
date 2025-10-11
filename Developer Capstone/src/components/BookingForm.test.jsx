import React from "react";
import { describe, test, expect, vi } from 'vitest';
import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

// Reducer functions from Main.jsx
const initializeTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    return initializeTimes();
  }
  return state;
};

describe('BookingForm', () => {
  test('renders the BookingForm heading', () => {
    render(
      <BookingForm availableTimes={initializeTimes()} dispatch={vi.fn()} />
    );
    // Check for static heading text
    const headingElement = screen.getByText(/Book a table at/i);
    expect(headingElement).toBeTruthy();
  });
});

describe('initializeTimes', () => {
  test('returns the correct initial times array', () => {
    expect(initializeTimes()).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });
});

describe('updateTimes', () => {
  test('returns the same times array regardless of action', () => {
    const initial = ["17:00", "18:00"];
    const action = { type: 'UPDATE_TIMES', date: '2025-10-10' };
    expect(updateTimes(initial, action)).toEqual(initializeTimes());
  });

  test('returns state for unknown action type', () => {
    const initial = ["17:00", "18:00"];
    const action = { type: 'UNKNOWN' };
    expect(updateTimes(initial, action)).toBe(initial);
  });
});
