"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AlephiumConnectButton, useBalance, useWallet } from '@alephium/web3-react';
import { AiOutlineCopy, AiOutlineCheck, AiOutlineUser } from "react-icons/ai";
import { PiWalletBold } from "react-icons/pi";
import { LiaSignOutAltSolid } from 'react-icons/lia';
import { ANS } from '@alph-name-service/ans-sdk';
import { FaCoins } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isWalletDropdownOpen, setIsWalletDropdownOpen] = useState(false);
  const wallet = useWallet();
  const { balance } = useBalance();
  const [ansName, setAnsName] = useState('');
  const [ansUri, setAnsUri] = useState('');
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (wallet?.account?.address) {
        const getProfile = async () => {
          const ans = new ANS('mainnet');
          const testProfile = await ans.getProfile(wallet?.account?.address);
          if (testProfile?.name) {
              setAnsName(testProfile.name);
          }
          if (testProfile?.imgUri) {
              setAnsUri(testProfile.imgUri);
          }
        };
      getProfile();      
      }
}, [wallet?.account?.address]);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleWalletDropdown = () => setIsWalletDropdownOpen(!isWalletDropdownOpen);

  const shortenHash = (address, charsAmount = 6) => {
    return `${address.substring(0, charsAmount)}...${address.substring(address.length - charsAmount)}`;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const menuItems = [
    { label: 'Loan', href: '/loan' },
    ...(wallet?.account?.address ? [{ label: 'Dashboard', href: '/dashboard' }] : []),
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800/95 backdrop-blur-sm border-b border-gray-700/50 relative z-[100]">
      <header className="container mx-auto flex items-center justify-between px-6 py-4 text-white">
        <div className="z-50 flex items-center space-x-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              AlpacaFi
            </span>
          </Link>
        </div>

        <nav className="z-50 hidden space-x-6 md:flex">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="z-50 flex items-center space-x-4">
          <AlephiumConnectButton.Custom>
            {({ isConnected, disconnect, show, account }) => {
              const bal = balance?.balance ?? "0";
              return isConnected ? (
                <div className="relative">
                  <button 
                    onClick={toggleWalletDropdown} 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 p-2"
                  >
                    {ansUri ? (
                      <img src={ansUri} width={38} height={38} className="rounded-full shadow-lg shadow-green-900/20" alt="" />
                    ) : (
                      <AiOutlineUser className="w-8 h-8" />
                    )}
                  </button>
                  {isWalletDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-72 rounded-2xl overflow-hidden bg-gray-800/95 backdrop-blur-sm border border-gray-700/50 shadow-xl z-[101]">
                      <div className="relative">
                        <div className="h-24 bg-gradient-to-tr from-green-400/20 via-emerald-500/20 to-cyan-500/20"></div>
                        <div className="absolute -bottom-4 start-4">
                          <div className="flex items-center gap-3">
                            {ansUri ? (
                              <img src={ansUri} className="rounded-xl w-12 h-12 border-2 border-gray-700/50 shadow-lg" alt="" />
                            ) : (
                              <div className="rounded-xl w-12 h-12 border-2 border-gray-700/50 bg-gray-800 flex items-center justify-center">
                                <AiOutlineUser className="w-6 h-6 text-gray-400" />
                              </div>
                            )}
                            <div>
                              <h4 className="font-medium text-[15px] text-white">
                                {ansName || "Unnamed"}
                              </h4>
                              <p className="text-xs text-gray-400">Connected with Alephium</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-4 py-3 mt-4">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-900/50 border border-gray-700/50">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-green-400/10">
                                <PiWalletBold className="w-4 h-4 text-green-400" />
                              </div>
                              <div>
                                <p className="text-xs text-gray-400">Wallet</p>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm text-white">{shortenHash(wallet?.account?.address)}</span>
                                  <button 
                                    onClick={() => copyToClipboard(wallet?.account?.address)} 
                                    className="text-gray-400 hover:text-green-400 transition-colors relative"
                                  >
                                    <AnimatePresence mode="wait">
                                      {isCopied ? (
                                        <motion.div
                                          initial={{ scale: 0 }}
                                          animate={{ scale: 1 }}
                                          exit={{ scale: 0 }}
                                          transition={{ duration: 0.15 }}
                                          key="check"
                                        >
                                          <AiOutlineCheck className="w-3.5 h-3.5 text-green-400" />
                                        </motion.div>
                                      ) : (
                                        <motion.div
                                          initial={{ scale: 0 }}
                                          animate={{ scale: 1 }}
                                          exit={{ scale: 0 }}
                                          transition={{ duration: 0.15 }}
                                          key="copy"
                                        >
                                          <AiOutlineCopy className="w-3.5 h-3.5" />
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-1.5">
                            <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-900/50 border border-gray-700/50">
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-emerald-400/10">
                                  <FaCoins className="w-4 h-4 text-emerald-400" />
                                </div>
                                <div>
                                  <p className="text-xs text-gray-400">ALPH Balance</p>
                                  <p className="text-sm text-white">{(parseFloat(bal) / 1e18).toFixed(2)} $ALPH</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-700/50 mt-2">
                        <button 
                          onClick={disconnect} 
                          className="flex items-center gap-2 w-full px-4 py-3 text-[14px] text-gray-400 hover:text-red-400 hover:bg-gray-700/50 transition-all"
                        >
                          <LiaSignOutAltSolid className="w-4 h-4" />
                          Disconnect Wallet
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={show}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-green-500/10 via-green-500/20 to-green-400/10 
                    hover:from-green-500/20 hover:via-green-500/30 hover:to-green-400/20 
                    border border-green-500/20 hover:border-green-500/30 
                    transition-all duration-300 ease-out
                    text-green-400 hover:text-green-300"
                >
                  <PiWalletBold className="w-5 h-5" />
                  <span>Connect</span>
                </button>
              )
            }}
          </AlephiumConnectButton.Custom>
        </div>
      </header>
    </div>
  );
}