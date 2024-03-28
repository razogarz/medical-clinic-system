//using mock data, we can test ListPatients.tsx

import {render, screen} from "@testing-library/react";
import ListPatients from "./ListPatients";
import {describe, it, expect} from "vitest";

describe("ListPatients", () => {
    it("should render", () => {
        render(<ListPatients />);
        expect(screen.getByText("Sort by:")).toBeInTheDocument();
    });
    it("should render ListPatients component", async () => {
        render(<ListPatients />);
        const patientsCards = await screen.findAllByTestId("patient-card");
        expect(patientsCards.length).toBe(3);
    });
});