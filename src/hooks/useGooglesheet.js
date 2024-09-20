import { useState, useEffect } from "react";

const useGoogleSheet = (sheetId, gid) => {
  const [googleSheetRows, setGoogleSheetRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGoogleSheetRows = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `/api/googlesheets?sheetId=${sheetId}&gid=${gid}`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch data");
        }
        setGoogleSheetRows(data.reverse());
      } catch (err) {
        console.error("Error in useGoogleSheet:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGoogleSheetRows();
  }, [sheetId, gid]);

  return { googleSheetRows, isLoading, error };
};

export default useGoogleSheet;
