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
import Button from "../../../layouts/Button";
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

    // Reset Filters
    function resetFilters() {
        setQuery('');
        setCategory('');
        setSelectedTags([]);
        setShowTags(false);
    };

    return <>

        <h1 className='space2'>Prodotti</h1>

        <Section>
            <p>Trova il prodotto che fa per te.</p>
        </Section>



        {/* FILTERS */}
        <Section>
            <div className="flexLine">
                <h4>Prodotti trovati: {productsList.length}</h4>

                <Button
                    text='rimuovi filtri'
                    onClick={() => setShowModal(true)}
                    extraClass='buttonWarning'
                />
            </div>

            <div className="filtersSection">
                <Searchbar
                    placeholder='Cerca per nome..'
                    setExternalValue={setQuery}
                    reset={() => setQuery([''])}
                    externalValue={query}
                />

                <Select
                    placeholder='▼ Filtra per categoria..'
                    options={categories}
                    value={category}
                    setValue={setCategory}
                />

                <div className="filterContainer tags">
                    <p className="tagsFilter" onClick={() => showTagsList()}>
                        {showTags ? '▼' : '▶'} Filtra per Tags {selectedTags.length > 0 ? `〈${selectedTags.length}〉` : ''}
                    </p>

                    <RoundButton onClick={() => { setSelectedTags([]); setShowTags(false); }} />
                </div>
            </div>

            {/* TAGS LIST */}
            {showTags &&
                <div className="labelsList">

                    {tags.map((tag, index) => (
                        <Label
                            key={index}
                            item={tag}
                            action={true}
                            isSelected={selectedTags}
                            setIsSelected={setSelectedTags}
                        />
                    ))}
                </div>
            }

            {/* MODAL - REMOVE ALL FILTERS */}
            {showModal &&
                <Modal
                    closeModal={() => setShowModal(false)}
                    text='Vuoi davvero rimuovere tutti i filtri?'
                    confirm={() => { resetFilters(); setShowModal(false) }}
                />
            }

        </Section>



        {/* PRODUCTS LIST */}
        <div className="productsContainer">
            {productsList.map((p, index) =>
                <ProductCard
                    key={index}
                    img={p.img && p.img}
                    name={p.name && p.name}
                    category={p.category && p.category}
                    price={p.price && p.price}
                    available={p.name && p.name}
                    tags={p.tags && p.tags}
                    description={p.description && p.description}
                />
            )}
        </div>



        {/* BOTTOM BUTTONS */}
        <PageBottomButtons toContacts={true} />

    </>
}