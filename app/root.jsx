import { Link, Outlet, useCatch } from '@remix-run/react';

import Document from '~/components/util/Document';
import Error from '~/components/util/Error';
import Footer from '~/components/util/Footer';
import stylesheet from '~/tailwind.css';

export const meta = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <Document title="eCalendar App">
      <Outlet className="md:h-[85vh]" />
      <Footer />
    </Document>
  );
}

export function CatchBoundary() {
  const errorResponse = useCatch();
  return (
    <Document title="An error has occured">
      <main>
        <Error title="An error has occured">
          <p className="bg-red-500 my-1 p-1 mr-[50%] text-yellow-200">
            {errorResponse.data ||
              'Something went wrong. Please try again later...'}
          </p>
          <p className="mt-2 p-4 text-center text-3xl">
            Back to{' '}
            <Link
              to="/"
              className="p-1 text-emerald-400 border-red-500 hover:text-red-500 hover:border-emerald-400 hover:shadow-xl border-solid border-2 rounded-md"
            >
              safety
            </Link>
          </p>
        </Error>
      </main>
    </Document>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document title="An error has occured">
      <main>
        <Error title="An error has occured">
          <p className="bg-red-500 my-1 p-1 mr-[40%] text-yellow-200">
            {error.message || 'Please enter a valid URL path'}
          </p>
          <p className="mt-2 p-20 text-center text-3xl">
            Back to{' '}
            <Link
              to="/"
              className="p-1 text-emerald-400 border-red-500 hover:text-red-500 hover:border-emerald-400 hover:shadow-xl border-solid border-2 rounded-md text-center"
            >
              safety
            </Link>
          </p>
        </Error>
      </main>
    </Document>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: stylesheet }];
}
