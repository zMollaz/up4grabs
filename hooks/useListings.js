import { useState, useEffect } from "react";

const useListings = (defaultListings) => {
  const [listings, setListings] = useState(defaultListings);
  const [filteredListings, setFilteredListings] = useState(defaultListings);
  
  useEffect(()=> {
    setFilteredListings(listings)
  }, [listings, setFilteredListings]);

  const onSearch = (searchValue) => {
    setFilteredListings(
      listings.filter((listing) => {
        if (!searchValue) return true;
        return listing.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  };

  const addListing = (response) => {
    console.log(111, response.savedListing)
    setListings(prev => [...prev, response.savedListing] )
  }
  console.log(222, listings.length)
  console.log(333, filteredListings.length)
  return {
    listings: listings,
    filteredListings: filteredListings,
    onSearch: onSearch,
    addListing: addListing,
  };
};

export default useListings;
