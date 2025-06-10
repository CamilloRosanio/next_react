// NOTES


// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState, useEffect, useMemo } from "react";


// CONTEXTS
import { useMainContext } from "../../../contexts/MainContext";


// ASSETS
import { toTop, switchBoolean, splitQuery, addRemove } from "../../../assets/utilityFunctions";


// SUPPORT


// COMPONENTS
import Section from "../../../layouts/Section";
import Searchbar from "../../../layouts/Searchbar";
import Select from "../../../layouts/Select";
import Button from "../../../layouts/Button";
import RoundButton from "../../../layouts/RoundButton";


// EXPORT
export default function ProductsPage() {

    // USE-ROUTER

    // DATA - CONTEXT
    const { products, categories, tags } = useMainContext();

    // USE-STATE
    const [query, setQuery] = useState([]);
    const [category, setCategory] = useState('');
    const [selectedTags, setSelectedTags] = useState(['espresso']);
    const [showTags, setShowTags] = useState(false);
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState(1);
    const [showModal, setShowModal] = useState(false);

    // SUPPORT
    const sortArrow = sortOrder === 1 ? '▼' : '▲';

    // Remove ALL Filters
    const removeFilters = () => {
        setQuery(splitQuery(''));
        setCategory('');
        setSelectedTags([]);
        setShowTags(false);
    };

    // Show Tags
    function hideTags() { switchBoolean(setShowTags); }

    // Products useMemo()
    const productsList = useMemo(() => {

        // SUPPORT
        const countMatches = (product) => {
            let matches = 0;
            query.forEach(q => {
                const name = product.name ? product.name.toLowerCase() : '';
                const description = product.description ? product.description.toLowerCase() : '';
                if (name.includes(q.toLowerCase()) || description.includes(q.toLowerCase())) {
                    matches += 1;
                }
            });
            return matches;
        };

        // FILTER
        const filteredProducts = products.filter((product) => {
            const name = product.name ? product.name.toLowerCase() : '';
            const description = product.description ? product.description.toLowerCase() : '';

            // Match - Query
            const matchesQuery = query.some(q =>
                name.includes(q.toLowerCase()) ||
                description.includes(q.toLowerCase())
            );

            // Match - Category
            const matchesCategory = category ?
                (typeof product.category === 'string' && product.category.toLowerCase() === category.toLowerCase())
                : true;

            return matchesQuery && matchesCategory;
        });

        // SORT
        const sortedProducts = filteredProducts.sort((a, b) => {
            const matchesA = countMatches(a);
            const matchesB = countMatches(b);
            return matchesB - matchesA; // Ordinamento decrescente
        });

        return sortedProducts;
    }, [products, query, category, selectedTags, sortBy, sortOrder]);

    // INIT USE-EFFECT
    useEffect(() => {

        console.log('MOUNTING | Products Page');

    }, []);

    return <>

        <h1 className='space2'>Products</h1>

        <Section>
            <p>Explore our products list.</p>
        </Section>

        {/* DEBUG */}
        <div className="flexCol">
            <div>
                <h4>QUERY:</h4>
                <div className="flexLine">
                    {query && query.map((q, index) => <p key={index}>{q}</p>)}
                </div>
            </div>

            <div className="flexLine">
                <h4>CATEGORY: </h4>
                {category && <p>{category}</p>}
            </div>
        </div>



        {/* FILTERS */}

        <div className="flexLine">
            <h3>Filter list</h3>

            {
                (query === '')
                &&
                <Button
                    text='remove all filters'
                    onClick={() => removeFilters()}
                    extraClass='remove'
                />
            }

            {/* <Button
                text='remove all filters'
                onClick={() => removeFilters()}
                extraClass='remove'
            /> */}
        </div>

        <div className="filtersSection">
            <Searchbar
                placeholder='Search by name..'
                onDebouncedChange={setQuery}
                reset={() => setQuery([''])}
            />

            <Select
                placeholder='▼ Filter by category..'
                options={categories}
                value={category}
                setValue={setCategory}
            />

            <div className="filterContainer tags">
                <p className="tagsFilter" onClick={() => hideTags()}>
                    {showTags ? '▼' : '▶'} Filter by tags {selectedTags.length > 0 ? `(${selectedTags.length})` : ''}
                </p>

                <RoundButton onClick={() => { setSelectedTags([]); setShowTags(false); }} />
            </div>
        </div>

        {/* TAGS LIST */}
        {showTags &&
            <div className="tagsList">
                {tags && tags.map
                    ((t) =>
                        <div
                            className={`tagLabel ${selectedTags.includes(t) ? 'on' : ''}`}
                            onClick={() => addRemove(selectedTags, t)}
                        >
                            # {t}
                        </div>
                    )}
            </div>
        }




        {/* PRODUCTS LIST */}
        {productsList.map((p, index) =>
            <div className="flexLine debug" key={index}>
                <p>• {p.category} - {p.name}</p>
            </div>
        )}



        {/* BOTTOM BUTTONS */}
        <div className='bottomButtonsContainer'>
            < Button
                text='▲'
                onClick={toTop}
                extraClass={'color2'}
            />

            < Button
                text='Contattaci ▶'
                path='/contacts'
                extraClass={'color1'}
            />
        </div>

    </>
}