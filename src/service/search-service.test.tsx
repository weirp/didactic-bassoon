import React from 'react';

import { doSearch } from "./search-service";

const neuro: string = "The sky above the port was the color of television, tuned to a dead channel. `It's not like I'm using,' Case heard someone say, as he shouldered his way through the crowd around the door of the Chat.";
const grav: string = "A screaming comes across the sky. It has happened before, but there is nothing to compare it to now. It is too late. The Evacuation still proceeds, but it’s all theatre."

describe('Searching Neuromancer for "the"', () => {
    const expected = [9];
    const expect_the_case_insensitive_all: number[] = [1, 15, 28, 162, 179, 191];
    const expect_the_case_sensitive_all: number[] = [15, 28, 162, 179, 191];
    const expect_the_case_insensitive_first: number[] = [1];
    const expect_the_case_sensitive_first: number[] = [15];

    const searchString: string = "the";

    it('should find all occurences ignoring case', () => {
        expect(
            doSearch(neuro, searchString, false, true))
            .toEqual(expect.arrayContaining(expect_the_case_insensitive_all));
    });

    it('should find all occurences case-sensitive', () => {
        expect(
            doSearch(neuro, searchString, true, true))
            .toEqual(expect.arrayContaining(expect_the_case_sensitive_all));
    });

    it('should find first occurence ignoring case', () => {
        expect(
            doSearch(neuro, searchString, false, false))
            .toEqual(expect.arrayContaining(expect_the_case_insensitive_first));
    });

    it('should find first occurence case-sensitive', () => {
        expect(
            doSearch(neuro, searchString, true, false))
            .toEqual(expect.arrayContaining(expect_the_case_sensitive_first));
    });

});

describe('Searching Gravity\'s Rainbow for "it"', () => {
    const expected = [9];
    const expect_the_case_insensitive_all: number[] = [35, 91, 102, 153];
    const expect_the_case_sensitive_all: number[] = [91, 153];
    const expect_the_case_insensitive_first: number[] = [35];
    const expect_the_case_sensitive_first: number[] = [91];

    const searchString: string = 'it';

    it('should find all occurences ignoring case', () => {
        expect(
            doSearch(grav, searchString, false, true))
            .toEqual(expect.arrayContaining(expect_the_case_insensitive_all));
    });

    it('should find all occurences case-sensitive', () => {
        expect(
            doSearch(grav, searchString, true, true))
            .toEqual(expect.arrayContaining(expect_the_case_sensitive_all));
    });

    it('should find first occurence ignoring case', () => {
        expect(
            doSearch(grav, searchString, false, false))
            .toEqual(expect.arrayContaining(expect_the_case_insensitive_first));
    });

    it('should find first occurence case-sensitive', () => {
        expect(
            doSearch(grav, searchString, true, false))
            .toEqual(expect.arrayContaining(expect_the_case_sensitive_first));
    });
});

describe("running tests with nulls", () => {
    it('no results for empty subtext', () => {
        expect(doSearch(neuro, "", true, true))
            .toEqual([]);
    });
    it('no results for empty text and subtext', () => {
        expect(doSearch('', '', true, true))
            .toEqual([]);
    });
});
