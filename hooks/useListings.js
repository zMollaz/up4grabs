import { useState, useEffect } from "react";

const useListings = (data) => {
  const [listings, setListings] = useState(data.defaultListings);
  const [filteredListings, setFilteredListings] = useState(data.defaultListings);
  const [user, setUser] = useState(data.users[0].id);
  const [users, setUsers] = useState(data.users)
  
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
