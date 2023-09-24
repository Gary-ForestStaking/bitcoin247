import React, { useEffect, useRef } from 'react';

export default function TradingViewApp() {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    const script = document.createElement('script');
    script.id = 'tradingview-widget-loading-script';
    script.src = 'https://s3.tradingview.com/tv.js';
    script.type = 'text/javascript';
    script.onload = () => onLoadScriptRef.current && onLoadScriptRef.current();

    document.head.appendChild(script);

    return () => onLoadScriptRef.current = null;

    function createWidget() {
      if (document.getElementById('tradingview_d49c3') && 'TradingView' in window) {
        new window.TradingView.widget({
          container_id: "tradingview_d49c3",
          width: 1920,
          height: 1080,
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
          container_id: "tradingview_07c68"
          studies: ["STD;Bollinger_Bands"]
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_d49c3"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}
