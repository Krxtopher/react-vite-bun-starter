import React from 'react';
import { describe, expect, it } from 'bun:test';
import { render, screen } from '@testing-library/react';
import { SampleView } from '../src/react/SampleView';

describe('SampleView', () => {
  it('should display the text "Hello, from SampleView.', () => {
    render(<SampleView />);
    expect(screen.getByText('Hello, from SampleView.')).toBeDefined();
  });
});
