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
import Label from "../../../layouts/Label";
import RoundButton from "../../../layouts/RoundButton";
import ProductCard from "../../../components/ProductCard";
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
    const [selectedTags, setSelectedTags] = useState([]);
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

        // Count Matches - Name / Description
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

        // Filter by Tags
        const filterProductsByTags = (products, selectedTags) => {
            // Se selectedTags è vuoto o contiene una stringa vuota, ritorna l'array originale
            if (selectedTags.length === 0 || selectedTags[0] === '') {
                return products;
            }

            return products.filter(product => {
                // Se il prodotto non ha la chiave "tags", scartalo
                if (!product.tags || product.tags.length === 0) {
                    return false;
                }

                // Verifica se tutti i tag in selectedTags sono inclusi nei tags del prodotto
                return selectedTags.every(tag => product.tags.includes(tag));
            });
        };


        // FILTER - Name / Description / Category
        const filteredProducts = products.filter((product) => {
            const name = product.name ? product.name.toLowerCase() : '';
            const description = product.description ? product.description.toLowerCase() : '';

            // Query - Name / Description
            const matchesQuery = splitQuery(query).some(q =>
                name.includes(q.toLowerCase()) ||
                description.includes(q.toLowerCase())
            );

            // Category
            const matchesCategory = category ?
                (typeof product.category === 'string' && product.category.toLowerCase() === category.toLowerCase())
                : true;

            return matchesQuery && matchesCategory;
        });

        // FILTER - Tags
        const filteredByTags = filterProductsByTags(filteredProducts, selectedTags);

        // SORT
        const sortedProducts = filteredByTags.sort((a, b) => {
            const matchesA = countMatches(a);
            const matchesB = countMatches(b);
            return matchesB - matchesA; // Ordinamento decrescente
        });

        return sortedProducts;
    }, [products, query, category, selectedTags, sortBy, sortOrder]);

    return <>

        <h1 className='space2'>Prodotti</h1>

        <Section>
            <p>Trova il prodotto che fa per te.</p>
        </Section>



        {/* FILTERS */}

        <Section>
            <h4>Prodotti trovati: {productsList.length}</h4>

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
                    text='Vuoi davvero rimuovere tutti i Tag?'
                    confirm={() => { setSelectedTags([]); setShowTags(false); setShowModal(false); }}
                />
            }



            {/* TAGS LIST */}
            {showTags &&
                <ul className="tagsList">

                    {tags.map((tag, index) => (
                        <Label
                            key={index}
                            item={tag}
                            isSelectedList={selectedTags}
                            setIsSelectedList={setSelectedTags}
                            action={true}
                        />
                    ))}
                </ul>
            }

        </Section>



        {/* COLUMNS INDEX */}
        <div className="flexLine">
            {products.map(p => {
                null
            })}
        </div>



        {/* PRODUCTS LIST */}
        <div className="productsContainer">
            {productsList.map((p, index) =>
                <ProductCard
                    key={index}
                    name={p.name && p.name}
                    description={p.description && p.description}
                    category={p.category && p.category}
                    img={p.img && p.img}
                    tags={p.tags && p.tags}
                    price={p.price && p.price}
                    available={p.name && p.name}
                />
            )}
        </div>



        {/* BOTTOM BUTTONS */}
        <PageBottomButtons toContacts={true} />

    </>
}