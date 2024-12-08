const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy bg-white text-gray-800 p-8 md:p-16 lg:p-24 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-semibold text-center  mb-6">
        Privacy Policy for DOJO
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Last updated: November 2, 2024
      </p>
      <p className="mb-6 leading-relaxed">
        This privacy policy explains how we collect, use, and safeguard your
        information when you use our app, DOJO. By using our app, you agree to
        the collection and use of information in accordance with this policy.
      </p>

      <h3 className="text-2xl font-semibold  mb-4">Information We Collect</h3>
      <p className="mb-6 leading-relaxed">
        We use local storage to save your added todo list. No personal data is
        collected or stored on our servers.
      </p>

      <h3 className="text-2xl font-semibold  mb-4">Use of Information</h3>
      <p className="mb-6 leading-relaxed">
        The information you provide will be used solely for the purpose of
        managing your tasks within the DOJO app.
      </p>

      <h3 className="text-2xl font-semibold  mb-4">Data Security</h3>
      <p className="mb-6 leading-relaxed">
        We are committed to ensuring that your information is secure. We have
        implemented appropriate technical and organizational measures to protect
        your data from unauthorized access, use, or disclosure.
      </p>

      <h3 className="text-2xl font-semibold  mb-4">Contact Us</h3>
      <p className="leading-relaxed">
        If you have any questions about this Privacy Policy, please contact us
        at:
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

export default PrivacyPolicy;
