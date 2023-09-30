import { HiOutlineSearch } from "react-icons/hi";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { StateProps, StoreProduct } from "../../../../type";
import { useEffect, useState } from "react";
import SearchProducts from "./SearchProducts";



const SearchBar = () => {
  const [allData, setAllData] = useState([]);
  const { allProducts } = useSelector(
    (state: StateProps) => state.next
  );

  const dispatch = useDispatch();
  useEffect(() => {
    setAllData(allProducts.allProducts);
  }, [allProducts]);


  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = allData.filter((item: StoreProduct) =>
      item.title.toLocaleLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [allData, searchQuery]);

  return (
    <>
      <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
        <input onChange={handleSearch} value={searchQuery} type="text" placeholder="Search next_amazon_yt products" className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"/>
        <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
          <HiOutlineSearch />
        </span>
        {/* ========== Searchfield ========== */}
        {searchQuery && (
          <div className="absolute left-0 top-12 w-full mx-auto max-h-96 bg-gray-200 rounded-lg overflow-y-scroll cursor-pointer text-black">
            {filteredProducts.length > 0 ? (
              <>
                {searchQuery &&
                  filteredProducts.map((item: StoreProduct) => (
                    <Link key={item._id} className="w-full border-b-[1px] border-b-gray-400 flex items-center gap-4"
                      href={{
                        pathname: `${item._id}`,
                        query: { _id: item._id, brand: item.brand, category: item.category, description: item.description,
                          image: item.image, isNew: item.isNew, oldPrice: item.oldPrice, price: item.price, title: item.title }
                      }}
                      onClick={() => setSearchQuery("")}
                    >
                      <SearchProducts item={item} />
                    </Link>
                  ))}
              </>
            ) : (
              <div className="bg-gray-50 flex items-center justify-center py-10 rounded-lg shadow-lg">
                <p className="text-xl font-semibold animate-bounce">
                  Nothing is matches with your search keywords. Please try again!
                </p>
              </div>
            )}
          </div>
        )}
        {/* ========== Searchfield ========== */}
      </div>
    </>
  );


}



export default SearchBar
