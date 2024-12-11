<div align="center" id="top" className="mb-10">
<img src="./public/logo.png" alt="icon" width="150" height="150" />

&#xa0;

  <img src="./public/temp.png" alt="preview" />

<a href="https://jj-smartrep.vercel.app/">Demo</a>

</div>

# SmartRep AI

SmartRep AI is an advanced AI chatbot designed to streamline customer interactions, book appointments, process payments, and manage leads. It seamlessly integrates with any website, offering a customizable interface and a suite of powerful features to enhance user experience and business operations.

## Key Technologies
- **Next.js 15**: The latest version of Next.js for building robust and scalable applications.
- **Clerk**: Secure and customizable authentication components without watermarks.
- **Neon**: Modern database setup for efficient data management.
- **Uploadcare**: Secure file and image uploads.
- **Cloudways**: Managed cloud hosting for performance and scalability.
- **Bun**: Fast JavaScript runtime for optimized performance.
- **Stripe**: Secure payment processing.
- **Pusher**: Real-time functionality for chats and other interactive features.

## Features
- 🤖 **Automated AI Sales Rep**: Engages with customers and answers their queries intelligently.
- 📅 **Appointment Booking**: Effortlessly schedules appointments with an integrated calendar widget.
- 💻 **Universal Compatibility**: Easy integration with any website through a simple code snippet.
- 🧠 **Smart Question Linking**: Provides accurate and relevant responses based on user queries.
- 💬 **Real-Time Chat**: Supports both manual and automated chat options.
- 🏷️ **White-Labeling Options**: Customize the chatbot to match your brand's identity.
- 🎨 **Customizable Interface**: Modify the look and feel of the chatbot to suit your website's design.
- 🗓️ **Calendar Widget**: Integrated calendar for seamless appointment bookings.
- 💳 **Stripe Integration**: Securely process payments through Stripe.
- ✉️ **Email Marketing**: Simple tools to create and send marketing emails.
- 💰 **Financial Dashboard**: Monitor and manage your financial transactions.
- 💾 **Lead Management**: Save visitor information as leads for future follow-ups.
- 🔐 **Custom Login/Signup with OTP**: Secure authentication with one-time passwords.
- 📲 **Secure File/Image Uploads**: Allow users to upload files and images safely.
- 🔍 **SEO Optimized Blogging**: Improve your site's search engine ranking with SEO-friendly blog posts.
- 🏗️ **Improved Architecture**: Efficient and scalable backend structure.
- 🖥️ **Minimal, Stunning UI**: Clean and modern user interface.
- ❓ **FAQ Section**: Provide quick answers to frequently asked questions.
- 🌓 **Light/Dark Mode Toggle**: Switch between light and dark modes for user comfort.
- ⚙️ **Feature Control Settings**: Enable or disable features as per your plan.
- 🔒 **Restrict Features by Plan**: Control feature access based on user subscription plans.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/smartrep-ai.git
    cd smartrep-ai
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure environment variables:
    Create a `.env` file and add your environment-specific variables.
    ```plaintext
    STRIPE_API_KEY=your_stripe_api_key
    DATABASE_URL=your_database_url
    ```

4. Start the development server:
    ```bash
    npm start
    ```

## Usage

1. Add the SmartRep AI code snippet to your website:
    ```html
    <script src="https://yourdomain.com/smartrep-ai.js"></script>
    <div id="smartrep-ai"></div>
    <script>
        SmartRepAI.init({
            apiKey: 'your_api_key',
            userId: 'your_user_id'
        });
    </script>
    ```

2. Customize the chatbot interface through the SmartRep AI dashboard.

3. Monitor and manage interactions, bookings, and payments from the dashboard.

## Contributing

We welcome contributions to enhance SmartRep AI. Please fork the repository and create a pull request with your changes.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit them (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

SmartRep AI is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For support or inquiries, please contact us at jeff.jiang13@gmail.com.
