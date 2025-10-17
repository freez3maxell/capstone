import React from "react";
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';
import * as api from '../utilities/api.js';

// Mock fetchAPI
const mockTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
beforeEach(() => {
  vi.spyOn(api, 'fetchAPI').mockImplementation(() => mockTimes);
});
afterEach(() => cleanup());

const initializeTimes = () => {
  const today = new Date();
  return api.fetchAPI(today);
};

const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES' && action.date) {
    const dateObj = typeof action.date === 'string' ? new Date(action.date) : action.date;
    return api.fetchAPI(dateObj);
  }
  return state;
};

describe('BookingForm', () => {
  test('renders the BookingForm heading', () => {
    render(
      <BookingForm availableTimes={mockTimes} dispatch={vi.fn()} />
    );
    // Check for static heading text
    const headingElement = screen.getByText(/Book a table at/i);
    expect(headingElement).toBeTruthy();
  });
});

describe('initializeTimes', () => {
  test('returns the correct initial times array from fetchAPI', () => {
    expect(initializeTimes()).toEqual(mockTimes);
  });
});

describe('updateTimes', () => {
  test('returns the times array from fetchAPI for UPDATE_TIMES with date', () => {
    const initial = ["17:00", "18:00"];
    const action = { type: 'UPDATE_TIMES', date: '2025-10-10' };
    expect(updateTimes(initial, action)).toEqual(mockTimes);
  });

  test('returns state for unknown action type', () => {
    const initial = ["17:00", "18:00"];
    const action = { type: 'UNKNOWN' };
    expect(updateTimes(initial, action)).toBe(initial);
  });
});

describe('BookingForm HTML5 validation', () => {
  test('date input has type, required, and min attributes', () => {
    render(<BookingForm availableTimes={mockTimes} dispatch={vi.fn()} />);
    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput.getAttribute('type')).to.equal('date');
    expect(dateInput.required).to.be.true;
    expect(dateInput.getAttribute('min')).to.equal(new Date().toISOString().split('T')[0]);
  });

  test('time select is required and has disabled placeholder', () => {
    render(<BookingForm availableTimes={mockTimes} dispatch={vi.fn()} />);
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect.required).to.be.true;
    const placeholder = screen.getByText(/select time/i);
    expect(placeholder.disabled).to.be.true;
  });

  test('guests input has type, required, min, and max attributes', () => {
    render(<BookingForm availableTimes={mockTimes} dispatch={vi.fn()} />);
    const guestsInput = screen.getByLabelText(/guests/i);
    expect(guestsInput.getAttribute('type')).to.equal('number');
    expect(guestsInput.required).to.be.true;
    expect(guestsInput.getAttribute('min')).to.equal('1');
    expect(guestsInput.getAttribute('max')).to.equal('10');
  });

  test('occasion select is required and has disabled placeholder', () => {
    render(<BookingForm availableTimes={mockTimes} dispatch={vi.fn()} />);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect.required).to.be.true;
    const placeholder = screen.getByText(/select occasion/i);
    expect(placeholder.disabled).to.be.true;
  });
});

describe('BookingForm React validation', () => {
  test('submit button is enabled for valid form', () => {
    render(<BookingForm availableTimes={mockTimes} dispatch={vi.fn()} />);
    const submitBtn = screen.getByRole('button', { name: /find a table/i });
    expect(submitBtn.disabled).toBe(false);
  });

  test('submit button is disabled for invalid date (past)', () => {
    render(<BookingForm availableTimes={mockTimes} dispatch={vi.fn()} />);
    const dateInput = screen.getByLabelText(/date/i);
    const submitBtn = screen.getByRole('button', { name: /find a table/i });
    fireEvent.change(dateInput, { target: { value: '2020-01-01' } });
    expect(submitBtn.disabled).toBe(true);
  });

  test('submit button is disabled for invalid guests (<1)', () => {
    render(<BookingForm availableTimes={mockTimes} dispatch={vi.fn()} />);
    const guestsInput = screen.getByLabelText(/guests/i);
    const submitBtn = screen.getByRole('button', { name: /find a table/i });
    fireEvent.change(guestsInput, { target: { value: '0' } });
    expect(submitBtn.disabled).toBe(true);
  });

  test('submit button is disabled for invalid guests (>10)', () => {
    render(<BookingForm availableTimes={mockTimes} dispatch={vi.fn()} />);
    const guestsInput = screen.getByLabelText(/guests/i);
    const submitBtn = screen.getByRole('button', { name: /find a table/i });
    fireEvent.change(guestsInput, { target: { value: '11' } });
    expect(submitBtn.disabled).toBe(true);
  });

  test('submit button is disabled for invalid time (not in availableTimes)', () => {
    render(<BookingForm availableTimes={mockTimes} dispatch={vi.fn()} />);
    const timeSelect = screen.getByLabelText(/time/i);
    const submitBtn = screen.getByRole('button', { name: /find a table/i });
    // Use fireEvent to simulate user selecting an invalid time
    fireEvent.change(timeSelect, { target: { value: '23:00' } });
    expect(submitBtn.disabled).toBe(true);
  });

  test('submit button is disabled for empty occasion', () => {
    render(<BookingForm availableTimes={mockTimes} dispatch={vi.fn()} />);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitBtn = screen.getByRole('button', { name: /find a table/i });
    // Set to valid value first, then clear
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
    fireEvent.change(occasionSelect, { target: { value: '' } });
    expect(submitBtn.disabled).toBe(true);
  });

  test('submit button is enabled for valid occasion selection', () => {
    render(<BookingForm availableTimes={mockTimes} dispatch={vi.fn()} />);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
    const submitBtn = screen.getByRole('button', { name: /find a table/i });
    expect(submitBtn.disabled).toBe(false);
  });
});
