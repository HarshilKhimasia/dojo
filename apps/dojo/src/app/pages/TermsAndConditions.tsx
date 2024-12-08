const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions bg-white text-gray-800 p-8 md:p-16 lg:p-24 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-semibold text-center  mb-6">
        Terms and Conditions for DOJO
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Last updated: November 2, 2024
      </p>
      <p className="mb-6 leading-relaxed">
        Welcome to DOJO! These terms and conditions outline the rules and
        regulations for the use of our app, DOJO.
      </p>

      <h3 className="text-2xl font-semibold  mb-4">Acceptance of Terms</h3>
      <p className="mb-6 leading-relaxed">
        By using the DOJO app, you agree to comply with and be bound by these
        terms. If you do not agree with any part of these terms, you must not
        use our app.
      </p>

      <h3 className="text-2xl font-semibold  mb-4">Changes to Terms</h3>
      <p className="mb-6 leading-relaxed">
        We reserve the right to modify these terms at any time. Any changes will
        be effective immediately upon posting the revised terms on this page.
        Your continued use of the app after any changes signifies your
        acceptance of the new terms.
      </p>

      <h3 className="text-2xl font-semibold  mb-4">Use of the App</h3>
      <p className="mb-6 leading-relaxed">
        You are responsible for ensuring that your use of the app complies with
        all applicable laws and regulations. You agree not to use the app for
        any unlawful purposes.
      </p>

      <h3 className="text-2xl font-semibold  mb-4">Limitation of Liability</h3>
      <p className="mb-6 leading-relaxed">
        In no event shall Harshil Khimasia be liable for any direct, indirect,
        incidental, special, consequential, or punitive damages arising out of
        your use of or inability to use the app.
      </p>

      <h3 className="text-2xl font-semibold  mb-4">Governing Law</h3>
      <p className="mb-6 leading-relaxed">
        These terms and conditions shall be governed by and construed in
        accordance with the laws of India.
      </p>

      <h3 className="text-2xl font-semibold  mb-4">Contact Us</h3>
      <p className="leading-relaxed">
        If you have any questions about these Terms and Conditions, please
        contact us at:
      </p>
      <p className="mt-2 font-semibold">
        Harshil Khimasia - Freelance Web Developer
      </p>
      <p>
        Website:{' '}
        <a
          href="https://harshilkhimasia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:underline"
        >
          https://harshilkhimasia.com
        </a>
      </p>
      <p>Country: India</p>
    </div>
  );
};

export default TermsAndConditions;
