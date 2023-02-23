export const getFirstAbility = (pokemon) => {
    
    if (pokemon.abilities.length  === 0) {
        return null
    }else {
        return pokemon.abilities[0].ability.name
    }

}

export const convertPoundsToKilograms = (pounds) => {

    if (pounds === 0) {
        return 0
    }else {
        return (pounds*0.453592 )
    }


}