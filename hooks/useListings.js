import { useState, useEffect } from "react";

const useListings = ({defaultListings, users, defaultLikes}) => {
  const [listings, setListings] = useState(defaultListings);
  const [filteredListings, setFilteredListings] = useState(defaultListings);
  const [user, setUser] = useState('1');
  const [bidding, setBidding] = useState(false);
  const [likes, setLikes] = useState(defaultLikes);
  
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

  const switchUser = (e) => {
    setUser(e.target.value)
  }

  return {
    listings: listings,
    filteredListings: filteredListings,
    user: user,
    users: users,
    onSearch: onSearch,
    addListing: addListing,
    setUser: setUser,
    switchUser: switchUser,
    bidding: bidding,
    setBidding: setBidding,
    likes: likes,
    setLikes: setLikes,
  };
};

export default useListings;
