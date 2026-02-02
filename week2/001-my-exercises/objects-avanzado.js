const inventory = [];
let nextId = 1;

/**
 * Validate inputs for a car.
 * @param {string} brand
 * @param {number} year
 * @param {boolean} isElectric
 * @returns {{ok: true} | {ok: false, error: string}}
 */
function validateCarInput(brand, year, isElectric) {
  if (typeof brand !== "string" || brand.trim().length === 0) {
    return { ok: false, error: "brand must be a non-empty string" };
  }

  if (!Number.isInteger(year) || year < 1886 || year > 2100) {
    return {
      ok: false,
      error: "year must be an integer between 1886 and 2100",
    };
  }

  if (typeof isElectric !== "boolean") {
    return { ok: false, error: "isElectric must be a boolean" };
  }

  return { ok: true };
}

/**
 * Create a normalized car object (does NOT push into inventory).
 * @param {string} brand
 * @param {number} year
 * @param {boolean} isElectric
 * @returns {object | null}
 */
function createCar(brand, year, isElectric) {
  const validation = validateCarInput(brand, year, isElectric);
  if (!validation.ok) {
    console.log("Invalid car input:", validation.error, {
      brand,
      year,
      isElectric,
    });
    return null;
  }

  return {
    id: nextId++,
    brand: brand.trim(),
    year,
    isElectric,
    status: "available",
    createdAt: new Date().toISOString(),
  };
}

/**
 * Add a car to inventory.
 * @param {string} brand
 * @param {number} year
 * @param {boolean} isElectric
 * @returns {object | null}
 */
function addCar(brand, year, isElectric) {
  const car = createCar(brand, year, isElectric);
  if (!car) return null;

  inventory.push(car);
  return car;
}

/**
 * Find a car by id.
 * @param {number} id
 * @returns {object | undefined}
 */
function getCarById(id) {
  return inventory.find((car) => car.id === id);
}

/**
 * Update a car status.
 * Allowed: "available" | "reserved" | "sold"
 * @param {number} id
 * @param {string} status
 * @returns {boolean}
 */
function updateCarStatus(id, status) {
  const allowed = new Set(["available", "reserved", "sold"]);
  if (!allowed.has(status)) {
    console.log("Invalid status:", status);
    return false;
  }

  const car = getCarById(id);
  if (!car) {
    console.log("Car not found with id:", id);
    return false;
  }

  car.status = status;
  car.updatedAt = new Date().toISOString();
  return true;
}

/**
 * Remove a car from inventory.
 * @param {number} id
 * @returns {boolean}
 */
function removeCar(id) {
  const index = inventory.findIndex((car) => car.id === id);
  if (index === -1) {
    console.log("Car not found with id:", id);
    return false;
  }

  inventory.splice(index, 1);
  return true;
}

/**
 * Get cars by status.
 * @param {string} status
 * @returns {object[]}
 */
function listByStatus(status) {
  return inventory.filter((car) => car.status === status);
}

// --- Demo usage ---
const car1 = addCar("Tesla", 2024, true);
const car2 = addCar("Toyota", 2034, false); // will fail validation (year too high)
const car3 = addCar("Toyota", 2023, false);

if (car1) updateCarStatus(car1.id, "reserved");
if (car3) updateCarStatus(car3.id, "sold");

console.log("All inventory:", inventory);
console.log("Available:", listByStatus("available"));
console.log("Reserved:", listByStatus("reserved"));
console.log("Sold:", listByStatus("sold"));

if (car3) removeCar(car3.id);
console.log("After removal:", inventory);
