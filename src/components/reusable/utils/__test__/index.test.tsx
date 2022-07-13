import { filterData, sortData } from "../index";
import data from "../data";

describe("filterData", () => {
    it("should return all data if search is empty", () => {
        expect(filterData(data, "")).toEqual(data);
    });

    it("should return filtered data if search is not empty", () => {
        expect(filterData(data, "oyee")).toEqual([data[0]]);

        expect(filterData(data, "co")).toEqual([data[3], data[4]]);

        expect(filterData(data, "we")).toEqual([data[4]]);
    });
});

describe("sortData", () => {
    it("should return sorted data if sort is by name", () => {
        expect(sortData(data, { type: "ask", key: "name" })).toEqual([
            data[3],
            data[0],
            data[2],
            data[4],
            data[1],
        ]);
        expect(sortData(data, { type: "desk", key: "name" })).toEqual([
            data[1],
            data[4],
            data[2],
            data[0],
            data[3],
        ]);
    });

    it("should return sorted data if sort is by size", () => {
        expect(sortData(data, { type: "ask", key: "size" })).toEqual([
            data[3],
            data[1],
            data[0],
            data[2],
            data[4],
        ]);
        expect(sortData(data, { type: "desk", key: "size" })).toEqual([
            data[4],
            data[2],
            data[0],
            data[1],
            data[3],
        ]);
    });

    it("should return sorted data if sort is by date", () => {
        console.log(
            sortData(data, { type: "desk", key: "date" }).map((el) => el.size)
        );
        expect(sortData(data, { type: "ask", key: "date" })).toEqual([
            data[3],
            data[1],
            data[0],
            data[2],
            data[4],
        ]);
        expect(sortData(data, { type: "desk", key: "date" })).toEqual([
            data[0],
            data[1],
            data[2],
            data[3],
            data[4],
        ]);
    });
});
