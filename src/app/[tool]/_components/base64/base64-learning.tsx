"use static";

export const Base64Learning = () => {
  return (
    <article className="space-y-4">
      <section>
        <h4 className="font-semibold mb-2">What is Base64 Encoding?</h4>
        <p className="text-muted-foreground text-sm">
          Base64 is a binary-to-text encoding scheme that converts binary data
          into an ASCII string format. It&apos;s commonly used to transmit data
          over media that are designed to deal with textual data, such as
          embedding images in HTML or sending binary files via email.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-4">
        <div>
          <h5 className="font-semibold mb-2">Key Features:</h5>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>
              <strong className="font-semibold">Not Encryption:</strong> Base64
              does not provide confidentiality — it just encodes data.
            </li>
            <li>
              <strong className="font-semibold">Alphabet:</strong> Uses A–Z,
              a–z, 0–9, +, and /.
            </li>
            <li>
              <strong className="font-semibold">Padding:</strong> Output is
              padded with <code>=</code> to make it a multiple of 4 characters.
            </li>
            <li>
              <strong className="font-semibold">Readable:</strong> Encoded
              result is plain text and safe for most text-based systems.
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Common Uses:</h5>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Embedding binary files in XML or JSON</li>
            <li>Sending image or font data in HTML/CSS</li>
            <li>Email attachments (MIME)</li>
            <li>Simple obfuscation of data in URLs or tokens</li>
          </ul>
        </div>
      </section>

      <section>
        <h5 className="font-semibold mb-2">How Base64 Works</h5>
        <p className="text-sm text-muted-foreground mb-2.5">
          Base64 breaks input data into 3-byte chunks (24 bits) and splits each
          chunk into four 6-bit groups. Each 6-bit group maps to one character
          in the Base64 alphabet.
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground mb-2.5">
          <li>3 bytes (24 bits) → 4 Base64 characters</li>
          <li>
            1 byte → 2 padding <code>=</code>
          </li>
          <li>
            2 bytes → 1 padding <code>=</code>
          </li>
        </ul>
        <p className="text-sm text-muted-foreground">
          This ensures the encoded output is always a multiple of 4 characters.
          Padding helps decode correctly when original data isn&apos;t divisible
          by 3.
        </p>
      </section>

      <section>
        <h5 className="font-semibold mb-4">Security Notes</h5>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2.5">
              <strong className="font-medium">Pros:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Encodes binary safely in text systems</li>
              <li>Widely supported in web and email standards</li>
              <li>Easy to implement and decode</li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2.5">
              <strong className="font-medium">Cons:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Not secure — anyone can decode it</li>
              <li>Increases size by ~33%</li>
              <li>Can expose sensitive data if used improperly</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h5 className="font-semibold mb-4">Example Encodings</h5>
        <div className="overflow-auto rounded-lg border text-sm text-muted-foreground">
          <table className="w-full text-left border-collapse">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="p-2 border-b font-semibold">Input</th>
                <th className="p-2 border-b font-semibold">Base64 Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b">Hello</td>
                <td className="p-2 border-b">SGVsbG8=</td>
              </tr>
              <tr>
                <td className="p-2 border-b">Hi!</td>
                <td className="p-2 border-b">SGkh</td>
              </tr>
              <tr>
                <td className="p-2 border-b">✓</td>
                <td className="p-2 border-b">4pyT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
};
