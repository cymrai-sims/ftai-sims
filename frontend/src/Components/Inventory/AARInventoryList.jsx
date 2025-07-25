import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

// Table columns
const columns = [
  {
    name: "Part Number",
    selector: (row) => row.PN,
    sortable: true,
    wrap: true,
    cell: (row) => (
      <Link
        to='/inventory/inventory-temp'
        rel="noopener noreferrer"
        className="text-[var(--blue-main)] underline hover:text-[var(--orange-main)]"
      >
        {row.PN}
      </Link>
    ),
  },
  {
    name: "Part Number Group",
    selector: (row) => row.PN_GROUP,
    sortable: true,
    wrap: true,
  },
  {
    name: "Part Description",
    selector: (row) => row.DESCRIPTION,
    sortable: true,
    wrap: true,
  },
  {
    name: "Available Quantity",
    selector: (row) => row.QTY_AVAILABLE,
    sortable: true,
    right: true,
  },
  {
    name: "Material Group",
    selector: (row) => row.MAT_GROUP_1,
    sortable: true,
    right: true,
  },
  // {
  //   name: "Location",
  //   selector: (row) => row.LOCATION,
  //   sortable: true,
  //   right: true,
  // },
];

const AARInventoryList = () => {
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredInventories, setFilteredInventories] = useState([]);
  const [locationFilter, setLocationFilter] = useState("all");
  const [locations, setLocations] = useState([]);

  // Fetch and initialize data
  useEffect(() => {
    setLoading(true);
    fetch("/api/v1/aar_inventory/inventory")
      .then((res) => res.json())
      .then((json) => {
        const data = json.data || [];
        // Sort by Location by default
        data.sort((a, b) => {
          if (a.Location && b.Location)
            return a.Location.localeCompare(b.Location);
          if (a.Location) return -1;
          if (b.Location) return 1;
          return 0;
        });
        setInventories(data);
        // Get unique Locations
        const uniqueLocations = [
          ...new Set(data.map((inv) => inv.Location).filter(Boolean)),
        ];
        setLocations(uniqueLocations);
        setLoading(false);
      });
  }, []);

  // Filtering logic: search & Location
  useEffect(() => {
    let filtered = inventories;
    if (locationFilter !== "all") {
      filtered = filtered.filter(
        (inv) => inv.Location === locationFilter
      );
    }
    if (search) {
      const lowerSearch = search.toLowerCase();
      filtered = filtered.filter((inv) =>
        Object.values(inv)
          .join(" ")
          .toLowerCase()
          .includes(lowerSearch)
      );
    }
    setFilteredInventories(filtered);
  }, [search, inventories, locationFilter]);

  return (
    <div className="p-4">
      <h3 className="pb-5 text-[var(--dark-main)] font-bold">
        AAR Inventory List
      </h3>
      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border-b border-gray-400 px-2 py-1 rounded-none w-full md:w-72 focus:outline-none focus:border-b-2 focus:border-gray-600 mr-15"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="border border-gray-400 px-2 py-1 rounded w-full md:w-72 focus:outline-none focus:border-2 focus:border-gray-600"
        >
          <option value="all">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto">
        <DataTable
          columns={columns}
          data={filteredInventories}
          progressPending={loading}
          defaultSortFieldId={columns.findIndex(c => c.name === "Location") + 1}
          defaultSortAsc={true}
          pagination
          highlightOnHover
          striped
          persistTableHead
          responsive
          noDataComponent={<div className="py-4">No inventory items found.</div>}
        />
      </div>
    </div>
  );
};

export default AARInventoryList;