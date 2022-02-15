import { useState, useEffect } from "react";

const useListings = ({defaultListings, users}) => {
  const [listings, setListings] = useState(defaultListings);
  const [filteredListings, setFilteredListings] = useState(defaultListings);
  const [user, setUser] = useState(users[0].id);
  
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
    user: user,
    users: users,
    onSearch: onSearch,
    addListing: addListing,
    setUser: setUser,
  };
};

export default useListings;
