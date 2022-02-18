import { useState, useEffect } from "react";

const useListings = ({defaultListings, defaultLikes}) => {
  const [listings, setListings] = useState(defaultListings);
  const [filteredListings, setFilteredListings] = useState(defaultListings);
  const [bidding, setBidding] = useState(false);
  const [likes, setLikes] = useState(defaultLikes);
  const [searchValue, setSearchValue] = useState("");
  
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
    setListings(prev => [...prev, response.savedListing] )
  }


  return {
    listings: listings,
    filteredListings: filteredListings,
    setFilteredListings:setFilteredListings,
    onSearch: onSearch,
    addListing: addListing,
    bidding: bidding,
    setBidding: setBidding,
    likes: likes,
    setLikes: setLikes,
    searchValue: searchValue,
    setSearchValue: setSearchValue,
  };
};

export default useListings;
