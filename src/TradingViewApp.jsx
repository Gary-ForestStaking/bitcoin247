import React, { useEffect } from 'react';

export default function TradingViewApp() {

  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'tradingview-widget-loading-script';
    script.src = 'https://s3.tradingview.com/tv.js';
    script.type = 'text/javascript';
    script.onload = createWidgets;

    document.head.appendChild(script);

    function createWidgets() {
      if ('TradingView' in window) {
        // First widget
        new window.TradingView.widget({
          container_id: "tradingview_2b44c_1",
          autosize: true,
          symbol: "BINANCE:BTCUSDT",
          interval: "1",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          enable_publishing: false,
          backgroundColor: "rgba(0, 0, 0, 1)",
          gridColor: "rgba(0, 0, 0, 0.06)",
          hide_top_toolbar: true,
          save_image: false,
          studies: ["STD;Bollinger_Bands"]
        });

        // Second widget
        new window.TradingView.widget({
          container_id: "tradingview_2b44c_2",
          autosize: true,
          symbol: "BINANCE:BTCUSDT",
          interval: "1",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          enable_publishing: false,
          backgroundColor: "rgba(0, 0, 0, 1)",
          gridColor: "rgba(0, 0, 0, 0.06)",
          hide_top_toolbar: true,
          save_image: false,
          studies: ["STD;Bollinger_Bands"]
        });
      }
    }
  }, []);

  return (
    <div style={{ backgroundColor: 'black' }}>
      <div className="tradingview-widget-container">
        <div id="tradingview_2b44c_1"></div>
        <div className="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>

      <div className="tradingview-widget-container">
        <div id="tradingview_2b44c_2"></div>
        <div className="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    </div>
  );
}
