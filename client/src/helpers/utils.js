const icons = {
    normal: "https://res.cloudinary.com/ds41xxspf/image/upload/v1670594726/PokemonApp-Assets/120px-Pok%C3%A9mon_Normal_Type_Icon.svg_wrpt7c.png",
    steel: "https://res.cloudinary.com/ds41xxspf/image/upload/v1670594726/PokemonApp-Assets/120px-Pok%C3%A9mon_Steel_Type_Icon.svg_dighag.png",
    water: "https://res.cloudinary.com/ds41xxspf/image/upload/v1670594726/PokemonApp-Assets/120px-Pok%C3%A9mon_Water_Type_Icon.svg_w4noim.png",
    fire: "https://res.cloudinary.com/ds41xxspf/image/upload/v1670594725/PokemonApp-Assets/GO_Fire_am4moq.png",
    fighting: "hhttps://res.cloudinary.com/ds41xxspf/image/upload/v1670594726/PokemonApp-Assets/120px-Pok%C3%A9mon_Fighting_Type_Icon.svg_bnshpx.png",
    flying: "https://res.cloudinary.com/ds41xxspf/image/upload/v1670594725/PokemonApp-Assets/flying_ephzxh.png",
    poison: "https://res.cloudinary.com/ds41xxspf/image/upload/v1670594725/PokemonApp-Assets/120px-Pok%C3%A9mon_Poison_Type_Icon.svg_bnpdgy.png",
    ground: "https://res.cloudinary.com/ds41xxspf/image/upload/v1670594726/PokemonApp-Assets/120px-Pok%C3%A9mon_Ground_Type_Icon.svg_yznvty.png",
    rock: "https://res.cloudinary.com/ds41xxspf/image/upload/v1670594726/PokemonApp-Assets/120px-Pok%C3%A9mon_Rock_Type_Icon.svg_ktixnw.png",
    bug: "https://res.cloudinary.com/ds41xxspf/image/upload/v1670594725/PokemonApp-Assets/bug_shtzqb.png",
    ghost: "https://res.cloudinary.com/ds41xxspf/image/upload/v1670594725/PokemonApp-Assets/GO_Ghost_xfkesw.png",
    grass: "https://res.cloudinary.com/ds41xxspf/image/upload/v1670594725/PokemonApp-Assets/GO_Grass_nhvbyf.png",
    electric: "https://res.cloudinary.com/ds41xxspf/image/upload/v1670594725/PokemonApp-Assets/GO_Electric_hg4zuk.png",
    psychic: "https://res.cloudinary.com/ds41xxspf/image/upload/v1670594726/PokemonApp-Assets/GO_Psychic_qopao0.png",
    ice: "https://res.cloudinary.com/ds41xxspf/image/upload/v1670594725/PokemonApp-Assets/GO_Ice_qf6jt3.png",
    dragon: "https://res.cloudinary.com/ds41xxspf/image/upload/v1670594725/PokemonApp-Assets/GO_Dragon_tb6cve.png",
    fairy: "https://res.cloudinary.com/ds41xxspf/image/upload/v1670594725/PokemonApp-Assets/GO_Fairy_nmyvyb.png",
    dark: "https://res.cloudinary.com/ds41xxspf/image/upload/v1670594725/PokemonApp-Assets/GO_Dark_jqvbrz.png",
    shadow: "https://res.cloudinary.com/ds41xxspf/image/upload/v1670594725/PokemonApp-Assets/shadow-1667859-1665801_t1tvdy.png",
    unknown: "https://res.cloudinary.com/ds41xxspf/image/upload/v1670594940/PokemonApp-Assets/ask-icon-5450_oar1qf.png"
};

const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
    icons,
    capitalizeFirst
}