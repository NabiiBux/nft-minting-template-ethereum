import React, { useEffect, useRef, useState } from 'react';
import { Button, HStack, useToast } from '@chakra-ui/react';

const OutsideClickHandler = ({ children, onOutsideClick }) => {
  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      // Clicked outside the specified element
      onOutsideClick();
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return <div ref={wrapperRef}>{children}</div>;
};

function Nav({ connectWallet, disconnectWallet, ethAddress }) {
  const toast = useToast();
  const [open, setOpen] = useState(false);

  const handleOutsideClick = () => {
    console.log('Clicked outside!');
    setOpen(!open);
    // Add your logic for handling clicks outside the element
  };

  return (
    <div class="Aligner-item Aligner-item--top">
      <HStack flexDirection="column">
        <div
          style={{
            padding: '10px 20px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
          }}
        >
          {/* {ethAddress !== '' ? (
            <Button
              onClick={() => {
                navigator.clipboard.writeText(ethAddress).then(
                  toast({
                    description: 'Address copied.',
                    status: 'success',
                    duration: 1000,
                  })
                );
              }}
            >
              {ethAddress?.slice(0, 6)}...
              {ethAddress?.slice(ethAddress.length - 4, ethAddress.length)}
            </Button>
          ) : (
            ''
          )} */}
          {ethAddress !== '' ? (
            <div style={{ position: 'relative' }}>
              <Button
                color="white"
                fontWeight="bold"
                fontSize="1.5rem"
                maxWidth="100%"
                colorScheme="purple"
                size="lg"
                onClick={() => setOpen(true)}
                // onClick={() => {
                //   navigator.clipboard.writeText(ethAddress).then(
                //     toast({
                //       description: 'Address copied.',
                //       status: 'success',
                //       duration: 1000,
                //     })
                //   );
                // }}
              >
                {/* Disconnect */}
                {ethAddress?.slice(0, 6)}...
                {ethAddress?.slice(ethAddress.length - 4, ethAddress.length)}
              </Button>
              {open && (
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: '50px',
                    background: 'black',
                    padding: 10,
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                  }}
                >
                  <OutsideClickHandler onOutsideClick={handleOutsideClick}>
                    <Button
                      style={{ width: '100%' }}
                      color="white"
                      fontWeight="bold"
                      fontSize="1.5rem"
                      maxWidth="100%"
                      colorScheme="purple"
                      size="lg"
                      onClick={() => disconnectWallet()}
                    >
                      Disconnect
                    </Button>
                  </OutsideClickHandler>
                </div>
              )}
            </div>
          ) : (
            <Button
              colorScheme="purple"
              size="lg"
              onClick={() => connectWallet()}
            >
              Select Wallet
            </Button>
          )}
        </div>
      </HStack>
    </div>
  );
}

export default Nav;
