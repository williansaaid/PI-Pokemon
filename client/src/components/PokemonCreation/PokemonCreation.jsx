import React from "react";
import "./PokemonCreation.css"
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsTypes, createPokemon } from "../../redux/actions";
import { icons, capitalizeFirst } from "../../helpers/utils";


const PokemonCreation = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const types = useSelector((state) => state.types);
    const [input, setInput] = useState({
        name: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: []
    });
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        dispatch(getPokemonsTypes())
    },[]);

    function validateForm(input){
        const errors = {};
        const regex = /^[a-z]+$/i;

        if(!input.name) errors.name = "The Pokemon's name is missing"
        else if(!regex.test(input.name) || input.name.length > 20){
            errors.name = "The name is invalid, try again"
        }

        if(!input.image) errors.image = "An image url is missing";

        if(!input.hp) errors.hp = "The HP are missing";
        else if(input.hp > 255) errors.hp = "The max HP possible is 255 ;)";
        else if(input.hp < 1) errors.hp = "The min HP possible is 1 ;)"

        if(!input.attack) errors.attack = "The Attack Points are missing";
        else if(input.attack > 255) errors.attack = "The max Attack possible is 255 ;)";
        else if(input.attack < 1) errors.attack = "The min Attack possible is 1 ;)";

        if(!input.defense) errors.defense = "The Defense Points are missing";
        else if(input.defense > 255) errors.defense = "The max Defense possible is 255 ;)";
        else if(input.defense < 1) errors.defense = "The min Defense possible is 1 ;)";

        if(!input.speed) errors.speed = "The Speed Points are missing";
        else if(input.speed > 255) errors.speed = "The max Speed possible is 255 ;)";
        else if(input.speed < 1) errors.speed = "The min Speed possible is 1 ;)";

        if(!input.height) errors.height = "The Height of your Pokémon is missing";
        else if(input.height > 100) errors.height = "The max Height possible is 100 mts ;)";
        else if(input.height < 0.1) errors.height = "The min Height possible is 0.1 mts ;)";

        if(!input.weight) errors.weight = "The Weight of your Pokémon is missing";
        else if(input.weight > 1000) errors.weight = "The max Weight possible is 1000 kgs ;)";
        else if(input.weight < 0.1) errors.weight = "The min Weight possible is 0.1 kgs ;)";

        if(input.types.length < 1) errors.types = "Make sure you have assigned a type for your Pokémon!";
        else if(input.types.length > 4) errors.types = "Your Pokémon can not have more than 4 types!";
        let result = Object.keys(errors).length > 0 ? errors : true;
        return result;
    };

    function handleChange(event){
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    };

    function handleSelect(event){
        if (input.types.includes(event.target.value)){
            alert("That type is already listed");
        } else {
            if(input.types.length > 3) alert("Your Pokémon can not have more than 4 types!");
            else {
                setInput({
                    ...input,
                    types: [ ...input.types, event.target.value]
                })
            };
        };
    };

    function handleClear(){
        setInput({
            name: "",
            image: "",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            types: []
        })
    }

    function handleClearType(element){
        setInput({
            ...input,
            types: input.types.filter(type => type !== element)
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        setFormErrors(validateForm(input));
        if(validateForm(input) === true){
            console.log("Holaa");
            dispatch(createPokemon(input));
            alert("You have created a new Pokémon!");
            handleClear();
            history.push('/home');
        }
    };

    return (
        <div className="pokemonCreate">
            <Link to={'/home'}>
                <button id="returnHomeFromForm">Return</button>
            </Link>
            <div id="formTitleContainer"><h1 id="formTitle">Pokémon Creation</h1></div>
            <button onClick={handleClear} id="clearForm">Clear Form</button>
            <form onSubmit={handleSubmit} id="form">
                <div className="space">
                    <label htmlFor={"nameCrt"}>Name</label>
                    <input
                        type={"text"}
                        name={"name"}
                        id={"nameCrt"}
                        value={input.name}
                        onChange={handleChange}
                        className="inputText"
                        placeholder="Name"
                    />
                    <p id="error">{formErrors.name}</p>
                </div>
                <div className="space">
                    <label htmlFor={"imageNewPkCrt"}>Image</label>
                    <input
                        type={"url"}
                        name={"image"}
                        id={"imageNewPkCrt"}
                        value={input.image}
                        onChange={handleChange}
                        className="inputText"
                        placeholder="Image URL"
                    />
                    <p id="error">{formErrors.image}</p>
                </div>
                <div className="space">
                    <label htmlFor={"hpCrt"}>HP</label>
                    <input
                        type={"number"}
                        name={"hp"}
                        id={"hpCrt"}
                        value={input.hp}
                        onChange={handleChange}
                        className="inputText"
                        placeholder="01"
                    />
                    <p id="error">{formErrors.hp}</p>
                </div>
                <div className="space">
                    <label htmlFor={"attackCrt"}>Attack</label>
                    <input
                        type={"number"}
                        name={"attack"}
                        id={"attackCrt"}
                        value={input.attack}
                        onChange={handleChange}
                        className="inputText"
                        placeholder="01"
                    />
                    <p id="error">{formErrors.attack}</p>
                </div>
                <div className="space">
                    <label htmlFor={"defenseCrt"}>Defense</label>
                    <input
                        type={"number"}
                        name={"defense"}
                        id={"defenseCrt"}
                        value={input.defense}
                        onChange={handleChange}
                        className="inputText"
                        placeholder="01"
                    />
                    <p id="error">{formErrors.defense}</p>
                </div>
                <div className="space">
                    <label htmlFor={"speedCrt"}>Speed</label>
                    <input
                        type={"number"}
                        name={"speed"}
                        id={"speedCrt"}
                        value={input.speed}
                        onChange={handleChange}
                        className="inputText"
                        placeholder="01"
                    />
                    <p id="error">{formErrors.speed}</p>
                </div>
                <div className="space">
                    <label htmlFor={"heightCrt"}>Height</label>
                    <input
                        type={"number"}
                        name={"height"}
                        id={"heightCrt"}
                        value={input.height}
                        onChange={handleChange}
                        className="inputText"
                        placeholder="00 m"
                    />
                    <p id="error">{formErrors.height}</p>
                </div>
                <div className="space">
                    <label htmlFor={"weightCrt"}>Weight</label>
                    <input
                        type={"number"}
                        name={"weight"}
                        id={"weightCrt"}
                        value={input.weight}
                        onChange={handleChange}
                        className="inputText"
                        placeholder="00 kg"
                    />
                    <p id="error">{formErrors.weight}</p>
                </div>
                <div id="selectContainer">
                    <p>Types</p>
                    <div id="optionsContainer">
                        <select defaultValue={"type"} onChange={handleSelect} id="selectTypes">
                            <option value={"type"} disabled>Type</option>
                            {types.map((type, key) => {
                                return <option value={type.name} key={key}>{capitalizeFirst(type.name)}</option>
                            })}
                        </select>
                    </div>
                    <p id="error">{formErrors.types}</p>
                </div>
                <div id="typeContainer">
                    {input.types.map((type, key) => {
                        return <div key={key} className="typeArea">
                            <p className="typeText">{capitalizeFirst(type)}</p>
                            <button onClick={() => handleClearType(type)} className="buttonX">X</button>
                        </div>
                    })}
                </div>
                <button type="submit" id="createPokemon">Create Pokémon</button>
            </form>
        </div>
    )
};

export default PokemonCreation;