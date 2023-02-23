import {convertPoundsToKilograms, getFirstAbility} from './Pokemon.service';
import React from 'react';

const emptyPokemon = {
    abilities: []
};
const pokemon = {
    abilities: [
        {
            ability:{
                name: "chlorophyll"
            }, 

            fiel2:{
                name: "chlorophyll"
            }, 
        },
         {
            ability:{
                name: "hey"
            }
        }
    ]
};


describe('Tests for getFirstAbility', () => {
    it('Should return null if there is no abilities', () => {
        expect(getFirstAbility(emptyPokemon)).toEqual(null);
    })
    it('Should return the first ability', () => {
        expect(getFirstAbility(pokemon)).toEqual("chlorophyll");
    })
    it('Should convert 0 pounds to 0 kilogram', () => {
        expect(convertPoundsToKilograms(0)).toEqual(0);
    })
    it('Should convert 1 pounds to 0.453592 kilogram', () => {
        expect(convertPoundsToKilograms(1)).toEqual(0.453592);
    })
    it('Should convert 2 pounds to kilogram', () => {
        expect(convertPoundsToKilograms(2)).toEqual(0.907184);
    })
});
