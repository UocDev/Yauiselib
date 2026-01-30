/**
 * Generate random integer from 1 to max (inclusive)
 * @param max upper bound (must be >= 1)
 */
export function randomInt(max: number): number {
    if (!Number.isInteger(max) || max < 1) {
        throw new RangeError("int must  >= 1");
    }

    // Math.random() -> [0, 1)
    // * max        -> [0, max)
    // floor + 1    -> [1, max]
    return Math.floor(Math.random() * max) + 1;
}
