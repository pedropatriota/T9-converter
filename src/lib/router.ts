import express from "express";

import { phoneNumber } from "./data";

const router = express.Router();

router.post("/converter", async (_req, res) => {
  const { number } = _req.body;

  const combineLetters = (digits: string) => {
    if (!digits || !digits.length) return [];

    const letters = digits.split("");
    const mapping = letters.map(digit => phoneNumber[digit] || [""]);

    return mapping.reduce((prev: string[], next: string[]) => {
      const combinations: string[] = [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (prev as string[]).reduce((_, current): any => {
        [...next].map(digit => combinations.push(`${current}${digit}`));
      }, "");
      return combinations;
    });
  };

  return res.json({ result: combineLetters(number) });
});

export default router;
