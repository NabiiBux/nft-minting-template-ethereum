import './App.css';
import Web3 from 'web3';
import MintingContract from './MintingContract.json';
import { useEffect, useState } from 'react';
import { image, headerText, collectionDescription } from './setting';
import styled from 'styled-components';
import { CiGlobe, CiTwitter } from 'react-icons/ci';
import { FaDiscord, FaGlobe, FaTwitter } from 'react-icons/fa';
import ReCaptach from './components/ReCaptach';
import {
  Center,
  Box,
  Head,
  Image,
  Button,
  HStack,
  VStack,
  Heading,
  Flex,
  Link,
  StackDivider,
  Stack,
  useToast,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useMediaQuery,
  Progress,
} from '@chakra-ui/react';
import Nav from './components/Nav';

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  let ethWindow = window.ethereum;
  const CONTRACT_ADDRESS = '0x77C9e7733550026AcE28950e973681C0F74191E3';
  const [contract, setContract] = useState(undefined);
  const [ethAddress, setEthAddress] = useState('');
  const [totalSupply, setTotalSupply] = useState(0);
  const [mintAmount, setMintAmount] = useState(1);
  const [latestTx, setlatestTx] = useState('');
  const [nftUrl, setNftUrl] = useState('');
  const [osLink, setOsLink] = useState('');
  const totalNfts = 8888;
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener to update screen width on resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // metamask related function

  const connectWallet = async () => {
    let provider = window.ethereum;

    if (typeof provider !== 'undefined') {
      // MetaMask is installed

      provider
        .request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          setEthAddress(accounts[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const disconnectWallet = () => {
    setEthAddress('');
    alert('disconnected');
  };

  const loadBlockchain = async () => {
    let provider = window.ethereum;
    const web3 = new Web3(provider);

    const contract = new web3.eth.Contract(
      MintingContract.abi,
      CONTRACT_ADDRESS
    );
    setContract(contract);
  };

  useEffect(() => {
    getSupply();
  });

  //set nftShowcaseToggle to "true" to enable the showcase component (dev only)
  const nftShowcaseToggle = false;
  useEffect(() => {
    // uncomment nftShowcase() for nft showcase
    // nftShowcase();
    connectWallet();
    loadBlockchain();
  }, [ethWindow]);

  // minting function

  const buyFlys = (number) => {
    if (contract !== undefined && ethAddress !== '') {
      var value = number * 20000000;

      contract.methods
        .buyFlys(number)
        .send({ from: ethAddress, value: value })
        .then((tx) => {
          console.log(tx);
          setlatestTx(tx.transactionHash);
          setOsLink(
            'https://opensea.io/assets/' +
              tx.to +
              '/' +
              tx.events.Transfer.returnValues.tokenId
          );
          console.log(osLink);
          onOpen();
          getSupply();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const mintGiveawayFlys = (number) => {
    if (contract !== undefined && ethAddress !== '') {
      var value = number * 20000000;

      contract.methods
        .GiveawayFlys(number)
        .send({ from: ethAddress, value: value })
        .then((tx) => {
          console.log(tx);
          setlatestTx(tx.transactionHash);
          setOsLink(
            'https://opensea.io/assets/' +
              tx.to +
              '/' +
              tx.events.Transfer.returnValues.tokenId
          );
          console.log(osLink);
          onOpen();
          getSupply();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // getting total nft supply function

  const getSupply = () => {
    if (contract !== undefined && ethAddress !== '') {
      contract.methods
        .currentSupply()
        .call()
        .then((supply) => {
          setTotalSupply(supply);
          // console.log(supply);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  };

  // uncomment this function if you want to enable showcasing nfts from a selected NFT collection (using fidenza as an example here)
  // function nftShowcase() {
  //   between(1, 998);
  //   setTimeout(nftShowcase, 5000);
  // }

  function between(min, max) {
    const tokenGen = Math.floor(Math.random() * (max - min + 1) + min);
    let tokenID = '';

    if (tokenGen <= 10) {
      tokenID = tokenGen <= 10 ? tokenGen : '00' + tokenGen;
    } else {
      tokenID = tokenGen >= 100 ? tokenGen : '0' + tokenGen;
    }

    // console.log(tokenGen);
    console.log(tokenID);
    setNftUrl('https://media.artblocks.io/78000' + tokenID + '.png');

    return;
  }

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    width: 100%;
  `;

  const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 0;
    gap: 16px;
    flex-wrap: wrap;
  `;
  const InfoBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 16px;
    gap: 8px;
    border: 2px solid #ffffff;
    border-radius: 4px;
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    text-transform: uppercase;
    color: var(--white);

    @media only screen and (max-width: 450px) {
      font-size: 18px;
    }
  `;
  const IconRow = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 24px;
    margin-bottom: -3px;
    margin-left: 1rem;
  `;
  const CollectionDescription = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    margin-bottom: 1rem;
  `;

  return (
    <>
      <main>
        <style index>
          {`
            html {
              height: 100%;
              background: black; /* fallback for old browsers */
            }
            body {
              // background: #673ab7; /* fallback for old browsers */
              background: black; /* fallback for old browsers */
            }
          `}
        </style>

        <>
          <Nav
            connectWallet={connectWallet}
            disconnectWallet={disconnectWallet}
            ethAddress={ethAddress}
          />
          <Flex
            gap={screenWidth > 650 ? '20px' : '10px'}
            marginBottom="20px"
            alignItems="center"
            justifyContent="center"
            flexDirection={screenWidth < 1100 ? 'column' : 'row'}
          >
            <div>
              <Flex
                width="100%"
                maxWidth="600px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                color="white"
                // height="45rem"
                maxHeight="100%"
              >
                <Flex>
                  <Content>
                    <Text
                      alignItems="center"
                      justifyContent={'650px' ? 'center' : 'flex-start'}
                      color="white"
                      fontSize={'650px' ? '5vh' : '3.5rem'}
                      fontWeight="bold"
                    >
                      {headerText}
                    </Text>
                    <InfoRow>
                      <></>

                      <InfoBox>
                        <p>Total items</p>
                        <p> </p>
                      </InfoBox>

                      <IconRow>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <FaGlobe></FaGlobe>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <FaTwitter></FaTwitter>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <FaDiscord></FaDiscord>
                        </a>
                      </IconRow>
                    </InfoRow>
                    <CollectionDescription>
                      {collectionDescription}
                    </CollectionDescription>
                    <div style={{ width: '100%' }}>
                      {ethAddress !== '' ? (
                        <ReCaptach />
                      ) : (
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
                          Select Wallet
                        </Button>
                      )}
                    </div>
                  </Content>
                </Flex>
                {/* <Text marginBottom="30px" width="100%">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci laudantium at, error reprehenderit minima
                  repellendus! Eveniet voluptatem iusto repudiandae suscipit,
                  expedita quibusdam quaerat officiis atque at ab libero, labore
                  eaque!
                </Text> */}
                <Flex width="100%" gap="20px">
                  <Stack
                    divider={<StackDivider />}
                    width="100%"
                    display="flex"
                    rounded={'lg'}
                    pos={'relative'}
                  ></Stack>
                </Flex>
              </Flex>
            </div>
            <div>
              <Flex color="white" flexDirection="column">
                <Image
                  src={image}
                  alt="project Image"
                  layout="responsive"
                  width={100}
                  height={100}
                  style={{
                    minWidth: screenWidth < 650 ? '400px' : '500px',
                    height: 'auto',
                  }}
                />
              </Flex>
            </div>
          </Flex>
        </>
      </main>
    </>
  );
}

export default App;
