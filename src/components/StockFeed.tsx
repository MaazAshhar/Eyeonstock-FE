import React from "react";

interface StockFeedProps {
  stockName: any;
  low: any;
  high: any;
  open: any;
  close: any;
  volume: any;
  stockInWatchlist: any;
}

const StockFeed: React.FC<StockFeedProps> = ({ stockName, low, high, open, close, volume, stockInWatchlist }) => {
  return (
    <div className="flex flex-col gap-4 justify-between items-center w-full border border-gray-100 rounded-xl p-5">
      <div className="flex flex-row w-full justify-between items-center">
        <h3 className="text-lg sm:text-2xl font-semibold">
          {stockName ? stockName : stockInWatchlist}
        </h3>
        <p>
          {stockName && (
            <>
              <span className="font-semibold text-xs sm:text-xl">close : </span>
              {close}
            </>
          )}
        </p>
      </div>
      <div className="flex flex-row w-full justify-between items-center">
        {stockName &&
          <>
            <div className="flex flex-row flex-wrap justify-between items-center gap-4">
              <p>
                <span className="font-semibold text-xs sm:text-xl">low : </span>
                {low}
              </p>
              <p>
                <span className="font-semibold text-xs sm:text-xl">
                  high :{" "}
                </span>
                {high}
              </p>
            </div>
            <div
              className="flex flex-row flex-wrap justify-between items-center gap-4"
              style={{ justifyContent: "right" }}
            >
              <p>
                <span className="font-semibold text-xs sm:text-xl">
                  open :{" "}
                </span>
                {open}
              </p>
              <p>
                <span className="font-semibold text-xs sm:text-xl">
                  volume :{" "}
                </span>
                {volume}
              </p>
            </div>
          </>
        }
        {(!stockName) && 
          <>
            <div>
              API limit reached
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default StockFeed;
