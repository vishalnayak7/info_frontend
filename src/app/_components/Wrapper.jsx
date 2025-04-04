"use client";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from "@mantine/core";
import Navbar from "./Navbar";
import Footer from './Footer';
import { Provider, useDispatch } from 'react-redux';
import Store from '../utils/Redux/Store';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";



export const gqlClient  = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_API);
// export const gqlClient  = new GraphQLClient('https://beta.pokeapi.co/graphql/v1beta');
export const queryClient = new QueryClient();

export default function Wrapper({ children }) {


     const theme = createTheme({
          fontFamily: 'var(--font-manrope)',
          headings: {
               fontFamily: 'var(--font-manrope)',
               fontWeight: '500',
          }
     });



     return (
          <MantineProvider theme={theme}>
               <QueryClientProvider client={queryClient}>
                    <Provider store={Store}>

                         <div className="w-full   flex flex-col justify-start items-center">
                              <Navbar />

                              {children}

                              <Footer />
                         </div>

                         <Notifications />
                    </Provider>
               </QueryClientProvider>
          </MantineProvider>
     );
}
