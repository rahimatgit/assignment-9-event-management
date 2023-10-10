
const Accordion = () => {
    return (
        <div className="w-[60%] mx-auto my-12">
            <h2 className="text-5xl font-semibold text-center my-6">Have Any Question?</h2>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        How can I request a quote for event management services?
                    </div>
                    <div className="collapse-content">
                        <p> You can request a quote by contacting us through our website's contact form, email, or phone. We'll be happy to discuss your event's specific needs and provide a customized quote.</p>
                        
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    Can you handle both large and small educational events?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we have experience managing events of all sizes, from small seminars and workshops to large conferences and conventions. Our team is equipped to tailor our services to your event's scale.</p>
                        
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    What types of educational institutions or organizations have you worked with?
                    </div>
                    <div className="collapse-content">
                        <p>We have worked with a diverse range of clients, including universities, schools, corporate training programs, non-profit organizations, and government agencies.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    What sets your event mobile apps apart?
                    </div>
                    <div className="collapse-content">
                        <p>Our customized event mobile apps are designed to enhance the attendee experience. They offer features like real-time updates, interactive schedules, speaker bios, and networking opportunities, all tailored to your event's needs.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    How can I get in touch with your team for further inquiries?
                    </div>
                    <div className="collapse-content">
                        <p>You can contact us through the "Contact Us" section on our website or reach out via email or phone. We're here to assist you with any questions or requests you may have.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;