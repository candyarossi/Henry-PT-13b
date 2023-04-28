const {
    checkSeatStatus,
    getRowNumber,
    book,
    getSeat,
    resumen,
  } = require("../homework");
  
  describe("checkSeatStatus Tests", () => {
    it("checkSeatStatus is a function", () => {
      expect(typeof checkSeatStatus).toBe("function");
    });
  
    it("should throw a TypeError if first parameter is not a string", () => {
      expect(() => checkSeatStatus(4)).toThrow(
        new TypeError("First parameter is not a string")
      );
    });
  
    it("should throw a TypeError if second parameter is not a number", () => {
      expect(() => checkSeatStatus("A", "2")).toThrow(
        new TypeError("Second parameter is not a number")
      );
    });
  
    it("should return true if the given seat defined by row and column is booked", () => {
      expect(checkSeatStatus("A", 1)).toBe(true);
    });
  
    it("should return false if the given seat defined by row and column is not booked", () => {
      expect(checkSeatStatus("E", 3)).toBe(false);
    });
  });
  
  describe("getRowNumber Tests", () => {
    it("should return 1 if the letter given is an A", () => {
      expect(getRowNumber("A")).toBe(0);
    });
  
    it("should return 3 if the letter given is a C", () => {
      expect(getRowNumber("C")).toBe(2);
    });
  });
  
  describe("book Tests", () => {
    //   it('should return "Seat in XX successfully booked" if the given seat is not booked', () => {
    //     expect(book("E", 3)).toBe("Seat in E3 successfully booked");
    //   });
    //   it('should return "Seat in XX is already booked" if the given seat is already booked', () => {
    //     expect(book("A", 1)).toBe("Seat in A1 is already booked");
    //   });
  
    it('should return "Seat in XX successfully booked" if the given seat is not booked', () => {
      expect(checkSeatStatus("E", 3)).toBe(false);
      expect(book("E", 3)).toBe("Seat in E3 successfully booked");
      expect(checkSeatStatus("E", 3)).toBe(true);
    });
  });
  
  /* Extras */
  
  describe("Extra Tests", () => {
    it("should throw a TypeError if first parameter isn't single letter", () => {
      expect(() => checkSeatStatus("abc", 3)).toThrow(
        new TypeError("Row has to be a single letter")
      );
      expect(() => checkSeatStatus("", 3)).toThrow(
        new TypeError("Row can't be a empty string")
      );
    });
  
    it("should throw a TypeError if first parameter is a string", () => {
      expect(() => checkSeatStatus("abc", 3)).toThrow(
        new TypeError("Row has to be a single letter")
      );
    });
  
    it("should throw a TypeError if first parameter is a empty string", () => {
      expect(() => checkSeatStatus("", 3)).toThrow(
        new TypeError("Row can't be a empty string")
      );
    });
  
    it("should throw an Error if row letter doesnt exist", () => {
      expect(() => checkSeatStatus("F", 3)).toThrow(
        new Error("Row has to be one of these letters: A, B, C, D, E")
      );
    });
  
    it("should throw an Error if column number doesnt exist", () => {
      expect(() => checkSeatStatus("E", 4)).toThrow(
        new Error("Column has to be one of these numbers: 0, 1, 2, 3")
      );
    });
  
    it("should return info of layout", () => {
      expect(resumen()).toEqual({
        "Asientos Totales": 20,
        "Asientos Reservados": 10,
        "Asientos Libres": 10,
        "Recaudación": "$4500",
      });
    });
  });