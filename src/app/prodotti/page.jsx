// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState, useEffect, useMemo } from "react";


// CONTEXTS
import { useMainContext } from "../../../contexts/MainContext";


// ASSETS
import { switchBoolean, splitQuery, addRemove } from "../../../assets/utilityFunctions";


// COMPONENTS
import Section from "../../../layouts/Section";
import Searchbar from "../../../layouts/Searchbar";
import Select from "../../../layouts/Select";
import TagLabel from "../../../layouts/TagLabel";
import RoundButton from "../../../layouts/RoundButton";
import PageBottomButtons from "../../../components/PageBottomButtons";
import Modal from "../../../layouts/Modal";


// EXPORT
export default function ProductsPage() {

    // USE-ROUTER

    // DATA - CONTEXT
    const { products, categories, tags } = useMainContext();

    // USE-STATE
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');
    const [selectedTags, setSelectedTags] = useState(['espresso']);
    const [showTags, setShowTags] = useState(false);
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState(1);
    const [showModal, setShowModal] = useState(false);

    // SUPPORT
    const sortArrow = sortOrder === 1 ? '▼' : '▲';

    // Show Tags
    function showTagsList() { switchBoolean(setShowTags); }

    // Products useMemo()
    const productsList = useMemo(() => {

        // SUPPORT
        const countMatches = (product) => {
            let matches = 0;
            splitQuery(query).forEach(q => {
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
            const matchesQuery = splitQuery(query).some(q =>
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

        console.log('MOUNTING | PRODUCTS PAGE');

    }, []);

    return <>

        <h1 className='space2'>Prodotti</h1>

        <Section>
            <p>Trova il prodotto che fa per te.</p>
        </Section>



        {/* FILTERS */}
        <div className="filtersSection">
            <Searchbar
                placeholder='Cerca per nome..'
                onDebouncedChange={setQuery}
                reset={() => setQuery([''])}
            />

            <Select
                placeholder='▼ Filtra per categoria..'
                options={categories}
                value={category}
                setValue={setCategory}
            />

            <div className="filterContainer tags">
                <p className="tagsFilter" onClick={() => showTagsList()}>
                    {showTags ? '▼' : '▶'} Filtra per Tags {selectedTags.length > 0 ? `(${selectedTags.length})` : ''}
                </p>

                <RoundButton onClick={() => { selectedTags.length ? setShowModal(true) : null }} />
            </div>
        </div>

        {/* MODAL - REMOVE ALL TAGS */}
        {showModal &&
            <Modal
                closeModal={() => setShowModal(false)}
                text='Confermando rimuoverai tutti i Tags dal filtro.'
                confirm={() => { setSelectedTags([]); setShowTags(false); setShowModal(false); }}
            />
        }



        {/* TAGS LIST */}
        {showTags &&
            <ul className="tagsList">
                {tags.map((tag, index) => (
                    <li
                        key={index}
                        className={`tagLabel ${selectedTags.includes(tag) ? "on" : ""}`}
                        onClick={() => addRemove(tag, selectedTags, setSelectedTags)}
                    >
                        {tag}
                    </li>
                ))}
            </ul>
        }



        {/* PRODUCTS LIST */}
        {productsList.map((p, index) =>
            <div className="flexLine debug" key={index}>
                <p>• {p.category} - {p.name}</p>
            </div>
        )}



        {/* BOTTOM BUTTONS */}
        <PageBottomButtons toContacts={true} />

    </>
}