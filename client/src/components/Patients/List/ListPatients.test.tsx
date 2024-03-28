//using mock data, we can test ListPatients.tsx

import {render, screen} from "@testing-library/react";
import ListPatients from "./ListPatients";
import {describe, it, expect} from "vitest";

describe("ListPatients", () => {
    it("should render", () => {
        render(<ListPatients />);
        expect(screen.getByText("Sort by:")).toBeInTheDocument();
    });

    it("should render patients cards", () => {
        render(<ListPatients />);
        const patientCards = screen.getAllByTestId("patient-card");
        expect(patientCards.length).toBe(3);
    });
});